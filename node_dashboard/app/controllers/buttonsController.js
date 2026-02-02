
class ButtonsController {

    async Buttons (req, res) {

        try {
            res.render("buttons", {
                title: "Buttons Page",
            });

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new ButtonsController();