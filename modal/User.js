const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.findByJWT = async function (token) {
  try {
    var user = this;
    var decoded = jwt.verify(token, "supersecret");
    const id = decoded.user;
    const fetchedUser = user.findOne({ _id: id });
    if (!fetchedUser) return false;
    return fetchedUser;
  } catch (err) {
    console.log(err);
    return false;
  }
};
module.exports = mongoose.model("User", userSchema);
