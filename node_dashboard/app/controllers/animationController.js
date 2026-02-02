
class AnimationController {
  async animation(req, res) {
    try {
      res.render("animation", {
        title: "Animation Page",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AnimationController();