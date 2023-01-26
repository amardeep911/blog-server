const user = require("../modal/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.logInHandler = (req, res) => {
  const email = req.body.data.email;
  const password = req.body.data.password;
  console.log(password);
  console.log(email);
  user
    .findOne({
      email: email,
    })
    .then((user) => {
      if (!user) {
        console.log("No user found with this email");
        res.send("User not found");
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        console.log("Password did not matched");
        return;
      }
      const token = jwt.sign(
        {
          user: loadedUser._id.toString(),
        },
        "supersecret",
        {
          expiresIn: "1h",
        }
      );
      // res.send('userCreated')
      res.cookie("token", token, {
        maxAge: 3600000,
        sameSite: "lax",
        secure: false,
        httpOnly: true,
      });
      res.json({ token: token, message: "userCreated" });
    })
    .catch((err) => console.log(err));
};
