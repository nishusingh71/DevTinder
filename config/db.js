const mongoose = require("mongoose");
const dbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://nishus877:3MyBCHaMj5uFNhVI@dev.anyig.mongodb.net/devTinder"
  );
};
module.exports = dbConnect;
