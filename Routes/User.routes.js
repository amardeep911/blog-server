const express = require("express");
const router = express.Router();
const middleware = require("../middleware/isAuthenticated");
const userController = require("../controller/userController");
router.get("/", middleware.isAuthenticated, userController.getUser);
module.exports = router;
