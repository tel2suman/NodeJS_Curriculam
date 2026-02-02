
class BorderController {

    async border(req, res) {

        try {
            res.render("border", {
                title: "Border Page"
            });

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new BorderController();