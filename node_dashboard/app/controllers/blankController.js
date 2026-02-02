
class BlankController {

    async blank(req, res) {

        try {
            
            res.render("blank", {
                title: "Blank Page",
            });

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new BlankController();