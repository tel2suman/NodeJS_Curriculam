

class TablesController {

    async tables (req, res) {

        try {
            res.render("tables",{
               title: "Tables Page",
            });

        } catch (error) {

            console.log(error);
        }
    }
}

module.exports = new TablesController();