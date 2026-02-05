
const Product = require('../models/product');

class ProductApiController {
  
  // create product
  async createProduct(req, res) {

    try {

      const { name, image, brand, price, color, size, desc } = req.body;

      const data = new Product({
        name,
        image,
        brand,
        price,
        color,
        size,
        desc,
      });

      const product = await data.save();

      return res.status(201).json({
        success: true,
        message: "product added successfully",
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
  async viewProduct(req, res) {

    try {

      const data = await Product.find();

      return res.status(200).json({
        success: true,
        message: "product listing is here",
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

  //update product
  async updateProduct(req, res) {

    try {

      const id = req.params.id;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "oops, product id required!",
        });
      }

      const data = await Product.findByIdAndUpdate(id, req.body, { new: true });

      return res.status(200).json({
        success: true,
        message: "your product has been updated",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // delete product
  async deleteProduct(req, res) {

    try {

      const id = req.params.id;

      const data = await Product.findByIdAndDelete(id);

      return res.status(200).json({
        success: true,
        message: "product deleted succesfully",
        data: data,
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  }

  // search product
  async searchProduct(req, res) {

    try {

      const name = req.query;

      const data = await Product.find(name);

      return res.status(200).json({
        success: true,
        message: "search product",
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

  //filter products
  async filterProduct(req, res) {

    try {

      const { name, size, color, brand, maxPrice, minPrice } = req.query;

      const filter = {};

        if (name) {

          filter.name = name;

        }

        if (size) {

            filter.size = size;
        }

        if (color) {

            filter.color = color;
        }

        if (brand) {

          filter.brand = brand;

        }

        if (minPrice || maxPrice) {

            filter.price = {};

            if (minPrice) {

                filter.price.$gte = parseInt(minPrice);
            }

            if (maxPrice) {

                filter.price.$lte = parseInt(maxPrice);
            }
        }

      const data = await Product.find(filter);

      return res.status(200).json({
        success: true,
        message: "filtered product",
        data: data,
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