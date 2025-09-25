const mongoose = require("mongoose");

main();

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  console.log("connected to DB successfully");
}
