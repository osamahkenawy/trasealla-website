import mysql from 'mysql2/promise';

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'RootPassword123!',
  database: process.env.DB_NAME || 'trasealla',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

// Create connection pool
let pool = null;

function getPool() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

// Initialize database connection
export async function connectDB() {
  try {
    const connection = await getPool().getConnection();
    console.log('MySQL connected successfully');
    connection.release();
    return connection;
  } catch (error) {
    console.error('MySQL connection error:', error);
    throw error;
  }
}

// Get database pool for queries
export function getDB() {
  return getPool();
}

// Execute a query
export async function query(sql, params) {
  try {
    const pool = getPool();
    const [results, fields] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('MySQL query error:', error);
    throw error;
  }
}

// Execute a query and return result with insertId
export async function execute(sql, params) {
  try {
    const pool = getPool();
    const [result, fields] = await pool.execute(sql, params);
    // result is a ResultSetHeader object with insertId property
    return result;
  } catch (error) {
    console.error('MySQL execute error:', error);
    console.error('SQL:', sql);
    console.error('Params:', params);
    throw error;
  }
}

export default getPool;

