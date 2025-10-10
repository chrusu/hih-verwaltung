#!/usr/bin/env bash
set -euo pipefail

# Build Supportvertrag PDF using Pandoc + XeLaTeX with custom fonts, logo and signature.
# Requirements (macOS): brew install pandoc basictex && tlmgr install xetex fontspec xunicode geometry

cd "$(dirname "$0")"

if ! command -v pandoc >/dev/null 2>&1; then
  echo "Fehler: pandoc ist nicht installiert. Installiere z.B.: brew install pandoc" >&2
  exit 1
fi
if ! command -v xelatex >/dev/null 2>&1; then
  echo "Fehler: xelatex (TeX) ist nicht installiert. Installiere z.B.: brew install basictex && tlmgr init-usertree && tlmgr install xetex fontspec geometry" >&2
  exit 1
fi

# Read meta
FONT_NAME=$(awk '/^## Font/{getline; print $0; exit}' meta.md | xargs || true)
INFO_FILE=$(awk '/^## Info/{getline; print $0; exit}' meta.md | xargs || true)
# Optional: Kunde-Datei
CUSTOMER_FILE="kunde.md"
# Color can be defined as hex like "#494949" or "494949" under heading ## Color or ## Farbe
RAW_COLOR=$(awk '/^## (Color|Farbe)/{getline; print $0; exit}' meta.md | xargs || true)
RAW_COLOR=${RAW_COLOR#\#}
BRAND_COLOR=${RAW_COLOR:-494949}

# Resolve fonts
MAINFONT_PATH=""
MAINFONT=""
BOLDFONT=""

case "${FONT_NAME}" in
  "Lexend Exa")
    MAINFONT_PATH="Lexend_Exa,Urbanist/Lexend_Exa/static/"
    MAINFONT="LexendExa-Regular.ttf"
    BOLDFONT="LexendExa-Bold.ttf"
    ;;
  "Urbanist")
    MAINFONT_PATH="Lexend_Exa,Urbanist/Urbanist/static/"
    MAINFONT="Urbanist-Regular.ttf"
    BOLDFONT="Urbanist-Bold.ttf"
    ;;
  *)
    # Default to Lexend Exa if not specified
    MAINFONT_PATH="Lexend_Exa,Urbanist/Lexend_Exa/static/"
    MAINFONT="LexendExa-Regular.ttf"
    BOLDFONT="LexendExa-Bold.ttf"
    ;;
esac

if [[ ! -f "${MAINFONT_PATH}${MAINFONT}" ]]; then
  echo "Warnung: Schriftart nicht gefunden unter ${MAINFONT_PATH}${MAINFONT}. Verwende System-Default." >&2
fi

# Inputs
CONTRACT_MD="supportvertrag.md"
[[ -f "$CONTRACT_MD" ]] || { echo "Fehler: $CONTRACT_MD fehlt"; exit 1; }

# Sanitize unicode (replace non-breaking hyphen U+2011 etc.) into temp files
TMP_DIR=".tmp_build"
rm -rf "$TMP_DIR" && mkdir -p "$TMP_DIR"
SAN_CONTRACT="$TMP_DIR/supportvertrag.sanitized.md"
perl -CSDA -pe 's/\x{2011}/-/g; s/\x{00A0}/ /g' "$CONTRACT_MD" > "$SAN_CONTRACT"

EXTRA_MD=""
SAN_EXTRA=""
if [[ -n "${INFO_FILE:-}" && -f "$INFO_FILE" ]]; then
  EXTRA_MD="$INFO_FILE"
  SAN_EXTRA="$TMP_DIR/info.sanitized.md"
  perl -CSDA -pe 's/\x{2011}/-/g; s/\x{00A0}/ /g' "$EXTRA_MD" > "$SAN_EXTRA"
  # Post-process: Telefonnummer und Email als Markdown-Links ausgeben
  awk '
    BEGIN{tel=0; mail=0}
    /^##[ ]*Telefonnummer[ ]*$/ { print; tel=1; next }
    /^##[ ]*Email[ ]*$/ { print; mail=1; next }
    {
      if (tel==1) {
        orig=$0; gsub(/^ +| +$/,"",orig);
        digits=orig; gsub(/[^0-9]/,"",digits);
        if (digits ~ /^0[0-9]+$/) { digits = "+41" substr(digits,2) } else if (digits ~ /^[1-9][0-9]+$/) { digits = "+" digits } else { digits = orig }
        print "[" orig "](" "tel:" digits ")";
        tel=0; next;
      }
      if (mail==1) {
        addr=$0; gsub(/^ +| +$/,"",addr);
        if (addr ~ /@/) { print "[" addr "](" "mailto:" addr ")" } else { print addr }
        mail=0; next;
      }
      print;
    }
  ' "$SAN_EXTRA" > "$SAN_EXTRA.tmp" && mv "$SAN_EXTRA.tmp" "$SAN_EXTRA"

  # Address block extrahieren (Zeilen nach "## Adresse" bis zur nächsten Leerzeile oder nächsten ##-Überschrift)
  ADDRESS_BLOCK=$(awk '
    BEGIN{addr=0}
    /^##[ ]*Adresse[ ]*$/ { addr=1; next }
    addr==1 && /^##[ ]*/ { addr=0 }
    addr==1 && NF==0 { addr=0 }
    addr==1 {
      gsub(/^ +| +$/,"",$0);
      lines = (lines=="" ? $0 : lines "\\\\\n" $0);
    }
    END{ print lines }
  ' "$SAN_EXTRA")
fi

# Provider-Adresse extrahieren (aus hinderling_internet_handwerk.md: Abschnitt ## Adresse)
PROVIDER_ADDRESS=""
PROVIDER_TEL=""
PROVIDER_TEL_CLEAN=""
PROVIDER_EMAIL=""
if [[ -f "${INFO_FILE:-}" ]]; then
  PROVIDER_ADDRESS=$(awk '
    BEGIN{addr=0}
    /^##[ ]*Adresse[ ]*$/ { addr=1; next }
    addr==1 && /^##[ ]*/ { addr=0 }
    addr==1 && NF==0 { addr=0 }
    addr==1 { gsub(/^ +| +$/,"",$0); lines = (lines==""?$0:lines "\\\\" $0) }
    END{print lines}
  ' "$INFO_FILE")
  PROVIDER_TEL=$(awk '/^##[ ]*Telefonnummer[ ]*$/ {getline; gsub(/^ +| +$/,"",$0); print; exit}' "$INFO_FILE")
  if [[ -n "$PROVIDER_TEL" ]]; then
    PROVIDER_TEL_CLEAN=$(echo "$PROVIDER_TEL" | sed -E 's/[^0-9+]//g' | sed -E 's/^0/+41/')
  fi
  PROVIDER_EMAIL=$(awk '/^##[ ]*Email[ ]*$/ {getline; gsub(/^ +| +$/,"",$0); print; exit}' "$INFO_FILE")
fi

# Kundenadresse extrahieren (aus kunde.md)
CUSTOMER_ADDRESS=""
if [[ -f "$CUSTOMER_FILE" ]]; then
  CUSTOMER_ADDRESS=$(awk '
    BEGIN{addr=0}
    /^##[ ]*Adresse[ ]*$/ { addr=1; next }
    /^##[ ]*/ && addr==1 { addr=0 }
    addr==1 && NF==0 { addr=0 }
    addr==1 { gsub(/^ +| +$/,"",$0); lines = (lines==""?$0:lines "\\\\" $0) }
    END{print lines}
  ' "$CUSTOMER_FILE")
fi

OUT_PDF="Supportvertrag_Teletextch.pdf"

# Build
pandoc \
  "$SAN_CONTRACT" \
  --from=gfm \
  --pdf-engine=xelatex \
  --template=template.tex \
  -V mainfontpath="${MAINFONT_PATH}" \
  -V mainfont="${MAINFONT}" \
  -V boldfont="${BOLDFONT}" \
  -V logo="Logo_Print.png" \
  -V signature="Unterschrift2.png" \
  -V brandcolor="${BRAND_COLOR}" \
  ${PROVIDER_ADDRESS:+-V provideraddress="${PROVIDER_ADDRESS}"} \
  ${PROVIDER_TEL:+-V providertel="${PROVIDER_TEL}"} \
  ${PROVIDER_TEL_CLEAN:+-V providertellink="${PROVIDER_TEL_CLEAN}"} \
  ${PROVIDER_EMAIL:+-V provideremail="${PROVIDER_EMAIL}"} \
  ${CUSTOMER_ADDRESS:+-V customeraddress="${CUSTOMER_ADDRESS}"} \
  -V today="$(date +%d.%m.%Y)" \
  -o "$OUT_PDF"

echo "PDF erstellt: $(pwd)/$OUT_PDF"
