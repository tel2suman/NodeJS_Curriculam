
class OtherController {

    async other(req, res) {

        try {

            res.render("other", {
                title: "Other Page",
            });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new OtherController();