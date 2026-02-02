
class CardsController {

    async cards(req, res) {

        try {
            res.render("cards",{
                title: "Cards Page",
            });
        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new CardsController();