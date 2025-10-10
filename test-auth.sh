#!/bin/bash

# Auth API Test Script

BASE_URL="http://localhost:3000/api/auth"

echo "🧪 Testing Auth API..."
echo ""

# Test 1: Register
echo "1️⃣  Testing Register..."
REGISTER_RESPONSE=$(curl -s -X POST "$BASE_URL/register" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","name":"Test User"}')

echo "Response: $REGISTER_RESPONSE"
echo ""

# Extract token
TOKEN=$(echo $REGISTER_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)
echo "Token: $TOKEN"
echo ""

# Test 2: Login
echo "2️⃣  Testing Login..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}')

echo "Response: $LOGIN_RESPONSE"
echo ""

# Test 3: Get Me (with token)
echo "3️⃣  Testing /me with token..."
ME_RESPONSE=$(curl -s -X GET "$BASE_URL/me" \
  -H "Authorization: Bearer $TOKEN")

echo "Response: $ME_RESPONSE"
echo ""

# Test 4: Get Me (without token)
echo "4️⃣  Testing /me without token (should fail)..."
ME_NO_TOKEN=$(curl -s -X GET "$BASE_URL/me")

echo "Response: $ME_NO_TOKEN"
echo ""

echo "✅ Tests completed!"
