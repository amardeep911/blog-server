const Blog = require("../modal/Blog");

exports.blogSaveHandler = async (req, res) => {
  const blog = new Blog({
    blogTitle: req.body.data.blogTitle,
    blogContent: req.body.data.blogContent,
    blogText: req.body.data.blogText,
  });
  try {
    const response = await blog.save();
    res.json({ blogId: response._id });
  } catch (err) {
    console.log("Blog is not saved");
  }
};
exports.getSingleBlog = async (req, res) => {
  Blog.findOne({ _id: req.query.blogId }, (err, doc) => {
    if (err) {
      console.log("No BLOG WITH THIS ID FOUND");
      return;
    }
    console.log(doc);
    res.json(doc);
  });
};
exports.getAllBlogs = async (req, res) => {
  const cursor = Blog.find().cursor();
  const blogsArray = [];
  for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
    blogsArray.push(doc);
  }
  res.json({ blogsArray: blogsArray });
};
