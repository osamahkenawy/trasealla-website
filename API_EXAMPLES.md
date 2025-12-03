# API Request Examples

## Contact Form API Examples

### Base URL
```
http://localhost:3000/api/contact
```
(Replace with your production URL when deployed)

---

## POST /api/contact

### Submit a New Contact Form

#### cURL Example
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "subject": "Inquiry about Car Rental Software",
    "message": "Hello, I am interested in learning more about your car rental management system. Can you provide more information about pricing and features?"
  }'
```

#### JavaScript Fetch Example
```javascript
fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john.doe@example.com',
    subject: 'Inquiry about Car Rental Software',
    message: 'Hello, I am interested in learning more about your car rental management system. Can you provide more information about pricing and features?'
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

#### Node.js Axios Example
```javascript
const axios = require('axios');

axios.post('http://localhost:3000/api/contact', {
  name: 'John Doe',
  email: 'john.doe@example.com',
  subject: 'Inquiry about Car Rental Software',
  message: 'Hello, I am interested in learning more about your car rental management system.'
})
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });
```

#### Python Requests Example
```python
import requests

url = "http://localhost:3000/api/contact"
payload = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "subject": "Inquiry about Car Rental Software",
    "message": "Hello, I am interested in learning more about your car rental management system."
}

response = requests.post(url, json=payload)
print(response.json())
```

#### Success Response (201)
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Error Response (400) - Missing Fields
```json
{
  "error": "All fields are required"
}
```

#### Error Response (400) - Invalid Email
```json
{
  "error": "Invalid email address"
}
```

---

## GET /api/contact

### Retrieve Contact Submissions

#### Get All Contacts (First Page)
```bash
curl http://localhost:3000/api/contact
```

#### Get Contacts with Pagination
```bash
curl "http://localhost:3000/api/contact?page=1&limit=10"
```

#### Get Only New Contacts
```bash
curl "http://localhost:3000/api/contact?status=new&page=1&limit=10"
```

#### JavaScript Fetch Example
```javascript
// Get all contacts
fetch('http://localhost:3000/api/contact')
  .then(response => response.json())
  .then(data => {
    console.log('Contacts:', data);
  });

// Get new contacts only
fetch('http://localhost:3000/api/contact?status=new&page=1&limit=10')
  .then(response => response.json())
  .then(data => {
    console.log('New Contacts:', data);
  });
```

#### Success Response (200)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "subject": "Inquiry about Car Rental Software",
      "message": "Hello, I am interested in learning more...",
      "status": "new",
      "ip_address": "127.0.0.1",
      "user_agent": "Mozilla/5.0...",
      "created_at": "2024-01-15T10:30:00.000Z",
      "updated_at": "2024-01-15T10:30:00.000Z"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "subject": "Fleet Management Inquiry",
      "message": "I would like to know more about your fleet management solution.",
      "status": "read",
      "ip_address": "192.168.1.1",
      "user_agent": "Mozilla/5.0...",
      "created_at": "2024-01-14T15:20:00.000Z",
      "updated_at": "2024-01-14T16:45:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "pages": 3
  }
}
```

---

## Sample Test Data

### Test Case 1: Valid Contact Submission
```json
{
  "name": "Ahmed Al-Mansoori",
  "email": "ahmed@example.com",
  "subject": "Car Rental System Demo Request",
  "message": "I run a car rental business in Dubai and would like to schedule a demo of your software. Please contact me at your earliest convenience."
}
```

### Test Case 2: Fleet Management Inquiry
```json
{
  "name": "Sarah Johnson",
  "email": "sarah.johnson@fleetco.com",
  "subject": "Fleet Management & Telematics Solution",
  "message": "We manage a fleet of 50+ vehicles and are looking for a comprehensive fleet management solution. Can you provide information about your telematics integration?"
}
```

### Test Case 3: Travel Agency Inquiry
```json
{
  "name": "Mohamed Hassan",
  "email": "mohamed@travelagency.ae",
  "subject": "Travel Agency Booking System",
  "message": "We are a travel agency based in Abu Dhabi looking to modernize our booking system. Would like to know more about your travel agency software."
}
```

### Test Case 4: Car Service Provider Inquiry
```json
{
  "name": "Carlos Rodriguez",
  "email": "carlos@autoservice.com",
  "subject": "Car Service Provider System",
  "message": "I own an automotive service center and need a system to manage appointments, track repairs, and handle customer records. Can you provide more details?"
}
```

---

## Testing with Postman

### Import Collection

1. Create a new collection in Postman
2. Add the following requests:

**Request 1: Submit Contact Form**
- Method: `POST`
- URL: `http://localhost:3000/api/contact`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "subject": "Test Subject",
  "message": "This is a test message"
}
```

**Request 2: Get All Contacts**
- Method: `GET`
- URL: `http://localhost:3000/api/contact`

**Request 3: Get New Contacts**
- Method: `GET`
- URL: `http://localhost:3000/api/contact?status=new&page=1&limit=10`

---

## Testing with Thunder Client (VS Code Extension)

### Request 1: Submit Contact
```http
POST http://localhost:3000/api/contact
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "subject": "Test Subject",
  "message": "Test message"
}
```

### Request 2: Get Contacts
```http
GET http://localhost:3000/api/contact?page=1&limit=10&status=all
```

---

## Quick Test Script

Save this as `test-api.js` and run with `node test-api.js`:

```javascript
const fetch = require('node-fetch'); // npm install node-fetch@2

const API_URL = 'http://localhost:3000/api/contact';

// Test POST request
async function testSubmitContact() {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message from the API test script.'
      })
    });

    const data = await response.json();
    console.log('POST Response:', data);
    return data.data?.id;
  } catch (error) {
    console.error('POST Error:', error);
  }
}

// Test GET request
async function testGetContacts() {
  try {
    const response = await fetch(`${API_URL}?page=1&limit=5`);
    const data = await response.json();
    console.log('GET Response:', data);
  } catch (error) {
    console.error('GET Error:', error);
  }
}

// Run tests
(async () => {
  console.log('Testing POST /api/contact...');
  await testSubmitContact();
  
  console.log('\nTesting GET /api/contact...');
  await testGetContacts();
})();
```

---

## Validation Examples

### Invalid Email
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "invalid-email",
    "subject": "Test",
    "message": "Test message"
  }'
```
**Expected Response:** `{"error": "Invalid email address"}`

### Missing Fields
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
  }'
```
**Expected Response:** `{"error": "All fields are required"}`

---

## Status Values

When retrieving contacts, you can filter by status:

- `new` - New, unread submissions
- `read` - Read but not replied
- `replied` - Already replied to
- `archived` - Archived submissions
- `all` - All submissions (default)

Example:
```bash
curl "http://localhost:3000/api/contact?status=new"
```

