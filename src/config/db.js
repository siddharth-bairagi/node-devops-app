// Placeholder DB config — in a real company this would connect to
// RDS (Postgres/MySQL) using env vars injected via Docker/K8s secrets.
//
// Example (using pg):
//
// const { Pool } = require('pg');
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
//
// module.exports = pool;

module.exports = {
  note: 'Not connected — this app currently uses in-memory data for demo purposes.',
};
