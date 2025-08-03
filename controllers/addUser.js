const db = require('../functions/dbFunction.js');

const addUser = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const checkQuery = "SELECT * FROM accounts WHERE email = ?";
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.status(500).json({ error: "Database error during email check" });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const insertQuery = "INSERT INTO accounts (email, password, role) VALUES (?, ?, ?)";
    db.query(insertQuery, [email, password, role], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ error: "Database insert error" });
      }
      res.status(200).json({ message: "User created", id: result.insertId });
    });
  });
};

module.exports = { addUser };
