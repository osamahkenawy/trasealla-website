import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'RootPassword123!',
  database: process.env.DB_NAME || 'trasealla',
  multipleStatements: true,
};

// Initialize database and create tables
export async function initDatabase() {
  let connection;
  
  try {
    // Connect without database first to create it if it doesn't exist
    const tempConfig = { ...dbConfig };
    delete tempConfig.database;
    
    connection = await mysql.createConnection(tempConfig);
    
    // Create database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    console.log(`Database '${dbConfig.database}' ready`);
    
    // Switch to the database
    await connection.query(`USE \`${dbConfig.database}\``);
    
    // Create contacts table
    const createTableSQL = `
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
    `;
    
    await connection.query(createTableSQL);
    console.log('Contacts table created/verified successfully');
    
    await connection.end();
    return true;
  } catch (error) {
    console.error('Database initialization error:', error);
    if (connection) {
      await connection.end();
    }
    throw error;
  }
}

// Run initialization if called directly
if (require.main === module) {
  initDatabase()
    .then(() => {
      console.log('Database initialization completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Database initialization failed:', error);
      process.exit(1);
    });
}

