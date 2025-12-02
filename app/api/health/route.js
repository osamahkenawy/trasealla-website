import { NextResponse } from 'next/server';
import { query } from '@/lib/mysql';

// Health check endpoint to test database connection
export async function GET() {
  try {
    // Test database connection
    await query('SELECT 1 as test');
    
    // Check if contacts table exists
    try {
      const result = await query('SELECT COUNT(*) as count FROM contacts');
      return NextResponse.json({
        status: 'healthy',
        database: 'connected',
        table: 'exists',
        contactsCount: result[0].count,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      if (error.code === 'ER_NO_SUCH_TABLE') {
        return NextResponse.json({
          status: 'healthy',
          database: 'connected',
          table: 'not_exists',
          message: 'Contacts table does not exist. It will be created on first API call.',
          timestamp: new Date().toISOString(),
        });
      }
      throw error;
    }
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json(
      {
        status: 'unhealthy',
        database: 'disconnected',
        error: error.message,
        code: error.code,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

