
class CoursesController {
  async courses(req, res) {
    try {
      res.render("courses", {
        title: "Courses Page",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CoursesController();
