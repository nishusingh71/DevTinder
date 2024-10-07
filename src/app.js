const express = require("express");
const app = express();
app.get("/user", (req, res) => {
  res.send("I'm new User");
});
app.post("/user", (req, res) => {
  res.send("Add new User");
});
app.put("/user", (req, res) => {
  res.send("Update User to here");
});
app.delete("/user/:userId", (req, res) => {
  res.send("Deleted Users");
});
app.use("/", (req, res) => {
  res.send("Hello From DevTinder");
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
