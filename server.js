const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"), { index: false }));

app.get("/", (_req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Thian app running at http://localhost:${PORT}`);
});
