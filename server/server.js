const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: "Hello Anjana! Backend is working via Docker! 🐳" });
});

app.listen(port, () => {
  console.log(`Backend API listening on port ${port}`);
});