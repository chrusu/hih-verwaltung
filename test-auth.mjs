#!/usr/bin/env node

/**
 * Quick Auth Test
 */

import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/auth';

async function testAuth() {
  try {
    console.log('🧪 Testing Auth API...\n');

    // Test 1: Login
    console.log('1️⃣  Testing Login...');
    const loginResponse = await axios.post(`${BASE_URL}/login`, {
      email: 'test@example.com',
      password: 'test123'
    });
    
    console.log('✅ Login successful!');
    console.log('User:', loginResponse.data.user.email);
    console.log('Token:', loginResponse.data.token.substring(0, 50) + '...\n');

    const token = loginResponse.data.token;

    // Test 2: Get Me with token
    console.log('2️⃣  Testing /me with token...');
    const meResponse = await axios.get(`${BASE_URL}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('✅ /me successful!');
    console.log('User:', meResponse.data.user.email, '-', meResponse.data.user.name);
    console.log('\n✅ All tests passed!');

  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

testAuth();
