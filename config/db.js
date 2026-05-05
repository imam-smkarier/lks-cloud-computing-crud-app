const { Sequelize } = require('sequelize');

// ============================================================
// KONFIGURASI DATABASE - LKS Cloud Computing Kab. Bogor 2026
// ============================================================
// Peserta WAJIB mengubah konfigurasi di bawah ini sesuai
// dengan endpoint Amazon RDS yang telah dibuat.
//
// Format nama database: db_namaKontingen
// Contoh: db_kotabogor, db_smkn1cibinong, db_smkn2cileungsi
// ============================================================

const sequelize = new Sequelize(
  'db_namaKontingen',     // Nama database (sesuaikan!)
  'admin',                // Username RDS (sesuaikan!)
  'password_anda',        // Password RDS (sesuaikan!)
  {
    host: 'your-rds-endpoint.ap-southeast-1.rds.amazonaws.com', // Endpoint RDS (sesuaikan!)
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = sequelize;
