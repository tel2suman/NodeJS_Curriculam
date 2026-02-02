
class ErrorController {

    async error(req, res) {

        try {
            res.render("error",{
                title: "Error! 404 Page Not Found",
            });

        } catch (error) {

            console.log(error);
        }
    }
}


module.exports = new ErrorController();