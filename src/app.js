const express = require("express");
const app = express();
const dbConnect = require("../config/db");
const User = require("../models/User");
const PORT = 8000;
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Shivani",
    lastName: "Singh",
    emailId: "shivani@gmail.com",
    age: 26,
  });
  await user.save();
  res.send("User Added Successfully!!!");
});

dbConnect()
  .then(() => {
    try {
      console.log("DB is Connected");
      app.listen(PORT, () => {
        console.log(`Server Running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  })
  .catch((err) => {
    console.log(err);
  });
