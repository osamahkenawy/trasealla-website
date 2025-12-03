# MySQL Database Setup Guide

## MySQL Setup

### 1. Install MySQL (if not already installed)

**macOS:**
```bash
brew install mysql
brew services start mysql
```

**Linux:**
```bash
sudo apt-get update
sudo apt-get install mysql-server
sudo systemctl start mysql
```

**Windows:**
Download and install from [MySQL Download Center](https://dev.mysql.com/downloads/mysql/)

### 2. Secure MySQL Installation

Run the MySQL secure installation:
```bash
sudo mysql_secure_installation
```

Or set root password manually:
```bash
sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'RootPassword123!';
FLUSH PRIVILEGES;
EXIT;
```

### 3. Create Database

Connect to MySQL:
```bash
mysql -u root -p
```

Enter your password: `RootPassword123!`

Create database:
```sql
CREATE DATABASE IF NOT EXISTS trasealla CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trasealla;
EXIT;
```

### 4. Initialize Database Tables

The database tables will be created automatically when you first run the application, or you can initialize them manually:

**Option 1: Automatic (Recommended)**
Just start your Next.js app - the tables will be created on first API call.

**Option 2: Manual Script**
Create a script file `scripts/init-db.js`:
```javascript
import { initDatabase } from '../lib/init-db.js';

initDatabase()
  .then(() => {
    console.log('Database initialized successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Database initialization failed:', error);
    process.exit(1);
  });
```

Run it:
```bash
node scripts/init-db.js
```

### 5. Environment Variables

Create a `.env.local` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=RootPassword123!
DB_NAME=trasealla
```

### 6. Install Dependencies

```bash
npm install
```

This will install `mysql2` which is required for database operations.

### 7. Test the Connection

Start your Next.js development server:
```bash
npm run dev
```

Submit a test contact form to verify the connection works.

## Database Schema

### Contacts Table

The contact form submissions are stored in the `contacts` table with the following structure:

```sql
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
  ip_address VARCHAR(45),
  user_agent VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_created_at (created_at),
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

**Fields:**
- `id` - Auto-increment primary key
- `name` - Contact name (max 100 characters)
- `email` - Contact email (validated, max 255 characters)
- `subject` - Message subject (max 200 characters)
- `message` - Message content (TEXT field)
- `status` - Status enum: 'new', 'read', 'replied', 'archived' (default: 'new')
- `ip_address` - Client IP address
- `user_agent` - Browser user agent
- `created_at` - Timestamp when record was created
- `updated_at` - Timestamp when record was last updated

## API Endpoints

### POST /api/contact
Submit a new contact form entry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Hello, I'm interested in your services."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### GET /api/contact
Retrieve contact submissions (for admin use).

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `status` - Filter by status: 'new', 'read', 'replied', 'archived', or 'all' (default: 'all')

**Example:**
```
GET /api/contact?page=1&limit=10&status=new
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Inquiry",
      "message": "Hello...",
      "status": "new",
      "ip_address": "127.0.0.1",
      "user_agent": "Mozilla/5.0...",
      "created_at": "2024-01-15T10:30:00.000Z",
      "updated_at": "2024-01-15T10:30:00.000Z"
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

## Troubleshooting

### Connection Issues

1. **Check MySQL is running:**
   ```bash
   brew services list  # macOS
   sudo systemctl status mysql  # Linux
   ```

2. **Test MySQL connection:**
   ```bash
   mysql -u root -p
   ```

3. **Verify database exists:**
   ```sql
   SHOW DATABASES;
   USE trasealla;
   SHOW TABLES;
   ```

4. **Check MySQL user permissions:**
   ```sql
   SELECT user, host FROM mysql.user;
   ```

### Common Errors

- **"Access denied for user 'root'@'localhost'"**
  - Check password in `.env.local`
  - Verify MySQL user has proper permissions
  - Try: `GRANT ALL PRIVILEGES ON trasealla.* TO 'root'@'localhost';`

- **"ER_NOT_SUPPORTED_AUTH_MODE"**
  - Update MySQL user authentication:
    ```sql
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'RootPassword123!';
    FLUSH PRIVILEGES;
    ```

- **"ECONNREFUSED"**
  - MySQL service is not running
  - Check MySQL is listening on port 3306
  - Verify connection settings in `.env.local`

- **"Table doesn't exist"**
  - Run the database initialization script
  - Or manually create the table using the SQL schema above

### Useful MySQL Commands

```sql
-- View all contacts
SELECT * FROM contacts ORDER BY created_at DESC;

-- Count contacts by status
SELECT status, COUNT(*) as count FROM contacts GROUP BY status;

-- Update contact status
UPDATE contacts SET status = 'read' WHERE id = 1;

-- Delete old contacts (older than 1 year)
DELETE FROM contacts WHERE created_at < DATE_SUB(NOW(), INTERVAL 1 YEAR);
```
