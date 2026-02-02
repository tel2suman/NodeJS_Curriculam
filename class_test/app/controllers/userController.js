
const users = require("../../Data/usersData");

class UserController {

    async user (req, res) {

        try {
            res.render("user", {
                title: "User Page",
                data: users
            });

        } catch (error) {

            console.log(error)
        }
    }
}

module.exports = users;

module.exports = new UserController();