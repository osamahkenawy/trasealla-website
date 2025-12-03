# Troubleshooting: Database Not Saving Data

## Quick Checks

### 1. Test Database Connection

Visit the health check endpoint:
```
http://localhost:3000/api/health
```

This will tell you:
- If the database is connected
- If the table exists
- How many contacts are in the database

### 2. Check Your `.env.local` File

Make sure you have a `.env.local` file in the root directory with:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=RootPassword123!
DB_NAME=trasealla
```

### 3. Verify MySQL is Running

**macOS:**
```bash
brew services list
# Should show mysql running
```

**Linux:**
```bash
sudo systemctl status mysql
```

**Test connection:**
```bash
mysql -u root -p
# Enter password: RootPassword123!
```

### 4. Verify Database and Table Exist

```sql
-- Connect to MySQL
mysql -u root -p

-- Check if database exists
SHOW DATABASES;
-- Should see 'trasealla' in the list

-- Use the database
USE trasealla;

-- Check if table exists
SHOW TABLES;
-- Should see 'contacts' in the list

-- Check table structure
DESCRIBE contacts;

-- Check if there's any data
SELECT COUNT(*) FROM contacts;
SELECT * FROM contacts;
```

### 5. Check Server Logs

When you submit the contact form, check your Next.js server console for:
- Connection errors
- SQL errors
- Success messages

Look for:
```
Contact saved successfully. ID: [number]
```

### 6. Test API Directly

Use curl to test the API:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

Check the response - if you get an error, it will tell you what's wrong.

### 7. Common Issues and Solutions

#### Issue: "ER_ACCESS_DENIED_ERROR"
**Solution:** Check your MySQL username and password in `.env.local`

#### Issue: "ER_BAD_DB_ERROR"
**Solution:** Database doesn't exist. Create it:
```sql
CREATE DATABASE trasealla CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### Issue: "ER_NO_SUCH_TABLE"
**Solution:** Table will be created automatically on first API call. If it's not, run:
```sql
USE trasealla;
-- Then run the SQL from database/schema.sql
```

#### Issue: Data not appearing after successful response
**Solution:** 
1. Check if you're looking at the right database
2. Check if there are multiple MySQL instances
3. Verify the connection string is correct

### 8. Manual Database Setup

If automatic table creation isn't working, run this manually:

```bash
mysql -u root -p < database/schema.sql
```

Or manually:

```sql
mysql -u root -p
CREATE DATABASE IF NOT EXISTS trasealla CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trasealla;

CREATE TABLE IF NOT EXISTS contacts (
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

### 9. Test with Sample Data

Insert a test record directly:

```sql
INSERT INTO contacts (name, email, subject, message, status)
VALUES ('Test User', 'test@example.com', 'Test Subject', 'Test message', 'new');

SELECT * FROM contacts;
```

If this works, the database is fine and the issue is with the API connection.

### 10. Check Environment Variables

Make sure Next.js is reading your `.env.local` file:

1. Restart your Next.js server after creating/modifying `.env.local`
2. Check that the file is in the root directory (same level as `package.json`)
3. Make sure there are no spaces around the `=` sign in `.env.local`

### 11. Debug Mode

Add this to your API route temporarily to see what's happening:

```javascript
console.log('DB Config:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  // Don't log password!
});
```

## Still Not Working?

1. **Check MySQL error logs:**
   - macOS: `/usr/local/var/mysql/*.err`
   - Linux: `/var/log/mysql/error.log`

2. **Try connecting with mysql command line:**
   ```bash
   mysql -u root -p -h localhost trasealla
   ```

3. **Check if port 3306 is correct:**
   ```bash
   # macOS/Linux
   lsof -i :3306
   ```

4. **Verify MySQL user permissions:**
   ```sql
   SHOW GRANTS FOR 'root'@'localhost';
   ```

If you're still having issues, share:
- The error message from the API response
- The server console logs
- The result of `/api/health` endpoint

