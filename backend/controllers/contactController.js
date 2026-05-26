const db = require("../config/db");

// save message
exports.sendMessage = (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(200).json({
      message: "Message sent successfully"
    });
  });
};