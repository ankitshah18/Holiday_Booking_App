// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const UserSchema = new Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
// });

// const UserModel = mongoose.model("User", UserSchema);

// module.exports = UserModel;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
