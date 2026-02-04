
const Product = require('../models/product');

class ProductApiController {

    // create product
    async createProduct (req, res) {

        try {

            const {name, size, color, image, desc, category} = req.body;

            const data = new Product({
              name,
              size,
              color,
              image,
              desc,
              category,
            });

            const product = await data.save();

            return res.status(200).json({
                success: true,
                message: "product created successfully",
                data: product,
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    //view product
    async viewProduct (req, res) {

        try {

            const data = await Product.find();

            return res.status(200).json({
                success: true,
                message: "product list",
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

    //edit product
    async editProduct(req, res) {

        try {

            const id = req.params.id;

            const data = await Product.findById(id);

            return res.status(200).json({
                success:  true,
                message: "get to edit product",
                data: data,
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // update product
    async updateProduct(req, res) {

        try {

            const id = req.params.id;

            if (!id) {

              return res.status(400).json({
                success: false,
                message: "product id is required",
              });

            }
                const data = await Product.findByIdAndUpdate(id, req.body, {new: true})

                return res.status(200).json({
                    success: true,
                    message: "product updated succesfully!!",
                    data: data
                });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    //delete product
    async deleteProduct(req, res) {

        try {

            const id = req.params.id;

            const data = await Product.findByIdAndDelete(id);

            return res.status(200).json({
                success: true,
                message: "product deleted successfully",
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}


module.exports = new ProductApiController();