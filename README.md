# 🚀 LKS Cloud Computing — Kabupaten Bogor 2026

Aplikasi CRUD Node.js + MySQL (AWS RDS) untuk **Lomba Kompetensi Siswa (LKS) SMK Bidang Cloud Computing** Tingkat Kabupaten Bogor 2026.

> Disediakan oleh **PT SMKarier Inovasi Digital** sebagai mitra teknis LKS SMK Kab. Bogor 2026.

---

## 📋 Deskripsi

Aplikasi web sederhana berbasis **Node.js + Express + Sequelize + EJS** yang menjalankan operasi CRUD (Create, Read, Update, Delete) terhadap database MySQL di **Amazon RDS**.

Peserta LKS akan men-deploy aplikasi ini di **AWS EC2** dan mengkonfigurasi seluruh infrastruktur cloud sesuai soal lomba.

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| ORM | Sequelize |
| Database | MySQL (Amazon RDS) |
| Template | EJS |
| Process Manager | PM2 |
| Web Server | Nginx (Reverse Proxy) |
| SSL | Let's Encrypt (Certbot) |

---

## ⚠️ Sebelum Menjalankan

1. **Pastikan sudah membuat database MySQL di Amazon RDS**
2. **Sesuaikan koneksi database** pada file `config/db.js`
3. Table akan dibuat **otomatis** oleh Sequelize saat koneksi berhasil

---

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/imam-smkarier/lks-cloud-computing-crud-app.git

# Masuk ke direktori project
cd lks-cloud-computing-crud-app

# Install dependencies
npm install
```

---

## ⚙️ Konfigurasi Database

Edit file `config/db.js` sesuai endpoint RDS yang telah dibuat:

```javascript
const sequelize = new Sequelize('db_namaKontingen', 'admin', 'password_anda', {
  host: 'your-rds-endpoint.region.rds.amazonaws.com',
  dialect: 'mysql'
});
```

---

## ▶️ Menjalankan Aplikasi

### Development (langsung)
```bash
node app.js
```

### Production (dengan PM2)
```bash
# Install PM2 secara global
sudo npm install -g pm2

# Jalankan aplikasi dengan PM2
pm2 start app.js --name "lks-crud-app"

# Pastikan PM2 auto-start saat reboot
pm2 startup
pm2 save
```

Aplikasi berjalan di: `http://localhost:3000`

---

## 🌐 Reverse Proxy (Nginx)

Setelah aplikasi berjalan di port 3000, konfigurasikan Nginx agar domain bisa diakses tanpa port:

```nginx
server {
    listen 80;
    server_name namaKontingen.smkarier.cloud;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔒 SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d namaKontingen.smkarier.cloud
```

---

## 📌 Checkpoint Penilaian

| # | Checkpoint | Yang Harus Tercapai |
|---|-----------|---------------------|
| I | EC2 + IP Public | Instance running, IP dikirim ke juri untuk DNS pointing |
| II | Akses `http://ip:3000` | Aplikasi CRUD berfungsi penuh |
| III | Akses `http://domain` | Reverse proxy aktif, aplikasi tampil tanpa port |
| IV | Akses `https://domain` | SSL aktif + auto redirect HTTP → HTTPS |

---

## 📁 Struktur Project

```
lks-cloud-computing-crud-app/
├── config/
│   └── db.js          # Konfigurasi koneksi database (RDS)
├── models/
│   └── user.js        # Model Sequelize (auto-create table)
├── views/
│   ├── index.ejs      # Halaman utama (list users)
│   ├── form.ejs       # Form tambah user
│   └── edit.ejs       # Form edit user
├── app.js             # Entry point aplikasi
├── package.json
└── README.md
```

---

## 📜 Informasi Lomba

- **Kegiatan:** LKS SMK Tingkat Kabupaten Bogor 2026
- **Bidang:** Cloud Computing
- **Durasi:** 4 Jam
- **Juri:** Imam Najmudin, S.Kom — Founder & CEO PT SMKarier Inovasi Digital
- **Domain:** `*.smkarier.cloud`

---

## 🏢 Tentang SMKarier

**PT SMKarier Inovasi Digital** adalah ekosistem karier vokasi Indonesia yang menghubungkan lulusan SMK dengan industri. Didukung oleh Google Cloud for Startups dan AWS Activate Program.

🌐 [smkarier.co.id](https://smkarier.co.id) | 📧 imam@smkarier.co.id

---

*© 2026 PT SMKarier Inovasi Digital — Dari Vokasi, Menuju Industri.*
