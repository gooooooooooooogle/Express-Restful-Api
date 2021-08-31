module.exports = {
  user: 'sa',
  password: 'Ngkybsql9123',
  server: '192.168.0.8',
  database: 'WXSBJC_DB',
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