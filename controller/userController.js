exports.getUser = async (req, res, next) => {
  return res.json(req.user);
};
