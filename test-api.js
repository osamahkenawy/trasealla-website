/**
 * Simple API Test Script
 * Run with: node test-api.js
 * 
 * Make sure your Next.js server is running on http://localhost:3000
 */

const API_BASE_URL = process.env.API_URL || 'http://localhost:3000';

// Test data samples
const testContacts = [
  {
    name: 'Ahmed Al-Mansoori',
    email: 'ahmed@example.com',
    subject: 'Car Rental System Demo Request',
    message: 'I run a car rental business in Dubai and would like to schedule a demo of your software.'
  },
  {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@fleetco.com',
    subject: 'Fleet Management & Telematics Solution',
    message: 'We manage a fleet of 50+ vehicles and are looking for a comprehensive fleet management solution.'
  },
  {
    name: 'Mohamed Hassan',
    email: 'mohamed@travelagency.ae',
    subject: 'Travel Agency Booking System',
    message: 'We are a travel agency based in Abu Dhabi looking to modernize our booking system.'
  }
];

// Test POST request
async function testSubmitContact(contactData) {
  try {
    console.log(`\n📤 Submitting contact: ${contactData.name}...`);
    
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Success:', data.message);
      console.log('   Contact ID:', data.data.id);
      return data.data.id;
    } else {
      console.log('❌ Error:', data.error);
      return null;
    }
  } catch (error) {
    console.error('❌ Network Error:', error.message);
    return null;
  }
}

// Test GET request
async function testGetContacts(status = 'all', page = 1, limit = 10) {
  try {
    console.log(`\n📥 Fetching contacts (status: ${status}, page: ${page})...`);
    
    const url = `${API_BASE_URL}/api/contact?status=${status}&page=${page}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (response.ok) {
      console.log(`✅ Retrieved ${data.data.length} contacts`);
      console.log(`   Total: ${data.pagination.total}, Pages: ${data.pagination.pages}`);
      
      if (data.data.length > 0) {
        console.log('\n   Sample contact:');
        const sample = data.data[0];
        console.log(`   - ID: ${sample.id}`);
        console.log(`   - Name: ${sample.name}`);
        console.log(`   - Email: ${sample.email}`);
        console.log(`   - Status: ${sample.status}`);
        console.log(`   - Created: ${new Date(sample.created_at).toLocaleString()}`);
      }
      
      return data;
    } else {
      console.log('❌ Error:', data.error);
      return null;
    }
  } catch (error) {
    console.error('❌ Network Error:', error.message);
    return null;
  }
}

// Test validation
async function testValidation() {
  console.log('\n🧪 Testing validation...');
  
  // Test missing fields
  console.log('\n   Testing missing fields...');
  const response1 = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test', email: 'test@example.com' })
  });
  const data1 = await response1.json();
  console.log(data1.error ? `   ✅ Validation works: ${data1.error}` : '   ❌ Validation failed');
  
  // Test invalid email
  console.log('\n   Testing invalid email...');
  const response2 = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test',
      email: 'invalid-email',
      subject: 'Test',
      message: 'Test'
    })
  });
  const data2 = await response2.json();
  console.log(data2.error ? `   ✅ Email validation works: ${data2.error}` : '   ❌ Email validation failed');
}

// Main test function
async function runTests() {
  console.log('🚀 Starting API Tests...');
  console.log(`📍 API Base URL: ${API_BASE_URL}\n`);
  
  // Check if fetch is available (Node.js 18+)
  if (typeof fetch === 'undefined') {
    console.error('❌ This script requires Node.js 18+ or install node-fetch');
    console.log('   Install: npm install node-fetch@2');
    process.exit(1);
  }
  
  try {
    // Test 1: Submit multiple contacts
    console.log('='.repeat(50));
    console.log('TEST 1: Submit Contact Forms');
    console.log('='.repeat(50));
    
    const submittedIds = [];
    for (const contact of testContacts) {
      const id = await testSubmitContact(contact);
      if (id) submittedIds.push(id);
      await new Promise(resolve => setTimeout(resolve, 500)); // Small delay
    }
    
    // Test 2: Get all contacts
    console.log('\n' + '='.repeat(50));
    console.log('TEST 2: Retrieve All Contacts');
    console.log('='.repeat(50));
    await testGetContacts('all', 1, 10);
    
    // Test 3: Get new contacts only
    console.log('\n' + '='.repeat(50));
    console.log('TEST 3: Retrieve New Contacts Only');
    console.log('='.repeat(50));
    await testGetContacts('new', 1, 10);
    
    // Test 4: Validation
    console.log('\n' + '='.repeat(50));
    console.log('TEST 4: Validation Tests');
    console.log('='.repeat(50));
    await testValidation();
    
    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('✅ Tests Completed!');
    console.log('='.repeat(50));
    console.log(`   Submitted: ${submittedIds.length} contacts`);
    console.log(`   Contact IDs: ${submittedIds.join(', ')}`);
    
  } catch (error) {
    console.error('\n❌ Test Error:', error);
    process.exit(1);
  }
}

// Run tests
if (require.main === module) {
  runTests();
}

module.exports = { testSubmitContact, testGetContacts, testValidation };

