const db = require("../config/db");

// save message
exports.sendMessage = (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  const { name, email, message } = req.body;

  // validation (VERY IMPORTANT)
  if (!name || !email || !message) {
    return res.status(400).json({
      error: "All fields are required"
    });
  }

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json({ error: err });
    }

    return res.status(200).json({
      message: "Message sent successfully",
      result
    });
  });
};