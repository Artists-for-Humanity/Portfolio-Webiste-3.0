const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from a directory named 'public'
app.use(express.static("public"));

// Send main entry page with links to each portfolio
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
