const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
  res.send("Node App running successfully");
});
app.listen(8000, () => console.log("Express i running on 8000"));
