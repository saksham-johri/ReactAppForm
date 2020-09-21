var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  userName: { type: String },
  pass: { type: String },
  email: { type: String },
  fname: { type: String },
  lname: { type: String },
});
module.exports = mongoose.model("collectionname", userSchema);
