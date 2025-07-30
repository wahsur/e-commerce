const pool = require("../config/db");
const UserModel = {
  // Membuat pengguna baru
  create: async (username, password, role) => {
    const [result] = await pool.execute(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
      [username, password, role]
    );
    return result.insertId;
  },
  // Mencari pengguna berdasarkan username
  findByUsername: async (username) => {
    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    return rows[0];
  },
  // Mencari pengguna berdasarkan ID
  findById: async (id) => {
    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  },
  // Mengupdate pengguna
  update: async (id, username, password, role) => {
    const [result] = await pool.execute(
      "UPDATE users SET username = ?, password = ?, role = ? WHERE id = ?",
      [username, password, role, id]
    );
    return result.affectedRows;
  },
  // Menghapus pengguna
  delete: async (id) => {
    const [result] = await pool.execute("DELETE FROM users WHERE id = ?", [id]);
    return result.affectedRows;
  },
  // Mendapatkan semua pengguna
  getAll: async () => {
    const [rows] = await pool.execute("SELECT * FROM users");
    return rows;
  },
};
module.exports = UserModel;
