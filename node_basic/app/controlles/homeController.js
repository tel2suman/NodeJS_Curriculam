
class HomeController {

    async user(req, res) {
        try {
            res.render("home", {
                title: "Home Page",
            });

        } catch (error) {

            console.log(error)

        }
    }
}

module.exports = new HomeController();