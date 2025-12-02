import { NextResponse } from 'next/server';
import { query, execute, getPool } from '@/lib/mysql';

// Ensure table exists before operations
let tableInitialized = false;

async function ensureTableExists() {
  if (tableInitialized) return;
  
  try {
    // Try to query the table to see if it exists
    await query('SELECT 1 FROM contacts LIMIT 1');
    tableInitialized = true;
    console.log('Contacts table exists');
  } catch (error) {
    // Table doesn't exist, create it
    if (error.code === 'ER_NO_SUCH_TABLE' || error.code === 'ER_BAD_TABLE_ERROR') {
      console.log('Contacts table not found. Creating table...');
      
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
      
      await query(createTableSQL);
      console.log('Contacts table created successfully');
      tableInitialized = true;
    } else {
      throw error;
    }
  }
}

export async function POST(request) {
  try {
    // Ensure table exists
    await ensureTableExists();

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get client IP and user agent
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Insert contact submission
    const sql = `
      INSERT INTO contacts (name, email, subject, message, status, ip_address, user_agent)
      VALUES (?, ?, ?, ?, 'new', ?, ?)
    `;
    
    const result = await execute(sql, [
      name.trim(),
      email.trim().toLowerCase(),
      subject.trim(),
      message.trim(),
      ipAddress,
      userAgent.substring(0, 500), // Limit user agent length
    ]);

    console.log('Contact saved successfully. ID:', result.insertId);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
        data: {
          id: result.insertId,
          name: name.trim(),
          email: email.trim().toLowerCase(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);

    // Handle specific database errors
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json(
        { error: 'This submission already exists. Please wait before submitting again.' },
        { status: 409 }
      );
    }

    if (error.code === 'ER_ACCESS_DENIED_ERROR' || error.code === 'ER_BAD_DB_ERROR') {
      return NextResponse.json(
        { error: 'Database connection error. Please check your database configuration.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Something went wrong. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// GET method to retrieve contacts (for admin use)
export async function GET(request) {
  try {
    // Ensure table exists
    await ensureTableExists();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const status = searchParams.get('status') || 'all';
    const offset = (page - 1) * limit;

    // Build query
    let sql = 'SELECT * FROM contacts';
    const params = [];

    if (status !== 'all') {
      sql += ' WHERE status = ?';
      params.push(status);
    }

    sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    // Get total count
    let countSql = 'SELECT COUNT(*) as total FROM contacts';
    const countParams = [];

    if (status !== 'all') {
      countSql += ' WHERE status = ?';
      countParams.push(status);
    }

    const contacts = await query(sql, params);
    const countResult = await query(countSql, countParams);
    const total = countResult[0].total;

    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    return NextResponse.json(
      { 
        error: 'Failed to fetch contacts',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
