
const User =require('../models/user');


class UserApiController {

    // create user
    async createUser(req, res) {

        try {

            const { name, username, email, address:{street, suite, city, zipcode, geo:{ lat, lng }}, phone, website, company:{cname, catchphrase, bs}} = req.body;

            const data = new User({
              name,
              username,
              email,
              address: {
                street,
                suite,
                city,
                zipcode,
                geo: {
                    lat,
                    lng
                },
              },
              phone,
              website,
              company: {
                cname,
                catchphrase,
                bs
            },
            });

            const user = await data.save();

            return res.status(201).json({
                success: true,
                message: "user created successfully!",
                data: user,
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // read user
    async getUser(req, res) {

        try {

            const data = await User.find();

            return res.status(200).json({
                success: true,
                message: "user list",
                total: data.length,
                data: data,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // select user
    async getEditUser(req, res) {

        try {

           const id = req.params.id;

           const data = await User.findById(id);

            return res.status(200).json({
                success: true,
                message: "get user",
                data: data,
            });

        } catch (error) {

          return res.status(500).json({
            success: false,
            message: error.message
          })

        }
    }

    //update user
    async updateUser(req, res) {

        try {

            const id = req.params.id;

            if (!id) {
                return res.status(400).json({
                    success: false,
                    message: "user id is required",
                });
            }

            const data = await User.findByIdAndUpdate(id, req.body, {new: true})

            return res.status(200).json({
                success: true,
                message: "user updated successfully",
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // delete user
    async deleteUser(req, res) {

        try {

            const id = req.params.id;

            await User.findByIdAndDelete(id);

            return res.status(200).json({
                success: true,
                message: "user deleted successfully!!"
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}


module.exports = new UserApiController();