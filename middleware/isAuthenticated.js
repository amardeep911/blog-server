const User = require("../modal/User");

exports.isAuthenticated = async function (req, res, next) {
  const token = req.cookies.token;

  if (!token) return next(new Error("invalid token"));
  const user = await User.findByJWT(token);
  if (!user) return next(new Error("NOt authenticated"));
  req.user = user;
  return next();
};
