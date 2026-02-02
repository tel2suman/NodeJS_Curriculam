
class ChartsController {

    async charts (req, res) {

        try {
            res.render("charts",{
                title: "Charts Page",
            });

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new ChartsController();