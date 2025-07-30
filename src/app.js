require("dotenv").config();
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
app.use(express.json()); // Middleware untuk parsing JSON body
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
const transactionRoutes = require("./routes/transactionRoutes");
app.use("/api/transactions", transactionRoutes);
const customerRoutes = require("./routes/customerRoutes");
app.use("/api/customers", customerRoutes);

// Rute untuk setiap modul
app.use("/api/products", productRoutes);
// Rute dasar
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access API at http://localhost:${PORT}/api`);
});
