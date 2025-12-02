-- Trasealla Database Schema
-- Run this SQL script to create the database and tables

-- Create database
CREATE DATABASE IF NOT EXISTS trasealla CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Use the database
USE trasealla;

-- Create contacts table
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

-- Verify table creation
SHOW TABLES;
DESCRIBE contacts;

