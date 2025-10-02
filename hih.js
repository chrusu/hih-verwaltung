#!/usr/bin/env node

/**
 * Haupteinstiegspunkt für HIH-Verwaltung
 */

import { InteractiveCLI } from './src/interactive-cli.js';

const cli = new InteractiveCLI();
cli.start().catch(console.error);