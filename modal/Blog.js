const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  blogContent: {
    type: String,
    required: true,
  },
  blogText: {
    type: String,
    required: true,
  },
});
BlogSchema.statics.methods = async function findBlogById(id) {
  try {
    var blog = this;
    blog.findOne({ _id: id }, function (err, doc) {
      if (err) {
        console.log("No blog found with this Id");
        return;
      }
      console.log(doc);
    });
    if (!fetchedBlog) return false;
    return fetchedBlog;
  } catch (err) {
    console.log("ERROR in fetching blog");
  }
};
module.exports = mongoose.model("Blog", BlogSchema);
