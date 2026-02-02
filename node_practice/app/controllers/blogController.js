
class BlogController {
  async blogs(req, res) {
    try {
      res.render("blog", {
        title: "Blogs Page",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new BlogController();
