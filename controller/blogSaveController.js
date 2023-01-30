const Blog = require("../modal/Blog");

exports.blogSaveHandler = async (req, res) => {
  const blog = new Blog({
    blogTitle: req.body.data.blogTitle,
    blogContent: req.body.data.blogContent,
    blogText: req.body.data.blogText,
    blogRawContentData: req.body.data.blogRawContentData,
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
exports.updateBlog = async (req, res) => {
  const blog = new Blog({
    blogTitle: req.body.data.blogTitle,
    blogContent: req.body.data.blogContent,
    blogText: req.body.data.blogText,
    blogRawContentData: req.body.data.blogRawContentData,
  });
  try {
    let blogToBeUpdated;

    const blog = await Blog.findOne({ _id: req.body.data.blogId });
    console.log(blog);
    // blog.blogTitle = req.body.data.blogTitle;
    // blog.blogContent = req.body.data.blogContent;
    // blog.blogText = req.body.data.blogText;
    // blog.blogRawContentData = req.body.data.blogRawContentData;
    // console.log(blog.blogRawContentData);
    // blog.updateOne({
    //   blogTitle: req.body.data.blogTitle,
    //   blogContent: req.body.data.blogContent,
    //   blogText: "fdfndf",
    //   blogRawContentData: req.body.data.blogRawContentData,
    // });

    const response = await Blog.updateOne(
      { _id: req.body.data.blogId },
      {
        blogTitle: req.body.data.blogTitle,
        blogContent: req.body.data.blogContent,
        blogText: "dfjdiof",
        blogRawContentData: req.body.data.blogRawContentData,
      }
    );
    console.log(response);
    // res.json({ blogId: response._id });
  } catch (err) {
    console.log("Blog is not updated");
  }
};
