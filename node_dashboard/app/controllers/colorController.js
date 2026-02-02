
class ColorController {

    async color(req, res) {
        try {

            res.render("color",{
                title:"Color Page"
            });

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new ColorController();