
class HomeController {

    async index(req, res) {

        try {
            res.render("home", {
                title: "Dashboard",
            });

        } catch (error) {

            console.log(error)
        }
    }
}


module.exports = new HomeController();