const express = require("express");
const router = express.Router();
const blogSaveController = require("../controller/blogSaveController");
router.post("/save", blogSaveController.blogSaveHandler);
router.get("/getsingleblog", blogSaveController.getSingleBlog);
router.get("/getallblogs", blogSaveController.getAllBlogs);

module.exports = router;
