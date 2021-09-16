module.exports = {
  user: 'sa',
  password: '1',
  server: '127.0.0.1',
  database: 'admin_system_db',
  prot: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}