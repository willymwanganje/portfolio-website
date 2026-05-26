const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// =======================
// MIDDLEWARE
// =======================
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// =======================
// ROUTES
// =======================
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

// =======================
// TEST ROUTE (HOME)
// =======================
app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running successfully 🚀"
  });
});

// =======================
// PORT
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});