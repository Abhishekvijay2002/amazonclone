
const productModel = require("../models/productModel");
const uploadToCloudinary = require("../utilities/imageUpload");

// CREATE PRODUCT


const createProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    if (!title || !description || !price || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "At least one image is required" });
    }

    const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.path));
    const uploadedImages = await Promise.all(imageUploadPromises);

    const newProduct = new productModel({
      title,
      description,
      price,
      category,
      image: uploadedImages,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "Product created successfully", savedProduct });

  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
  }
};


// GET ALL PRODUCTS
const listProducts = async (req, res) => {
  try {
    const productList = await productModel.find();
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// GET SINGLE PRODUCT BY ID
const productDetails = async (req, res) => {
  try {
    const { productid } = req.params;

    const productDetail = await productModel.findById(productid);
    if (!productDetail) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(productDetail);
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// SEARCH PRODUCTS BY TITLE
const searchProducts = async (req, res) => {
  try {
    const { q } = req.query;

    const query = {};
    if (q) {
      query.title = { $regex: q, $options: "i" };
    }

    const products = await productModel.find(query);
    res.json(products);
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// GET PRODUCTS BY CATEGORY
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params; 

    const products = await productModel.find({ category });

    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ error: "No products found in this category" });
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    const product = await productModel.findById(req.params.productid);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let imageUrls = product.images;
    if (req.files && req.files.length > 0) {
      imageUrls = await Promise.all(
        req.files.map((file) => uploadToCloudinary(file.path))
      );
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.productid,
      {
        title: title ?? product.title,
        description: description ?? product.description,
        price: price ?? product.price,
        category: category ?? product.category,
        images: imageUrls,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.productid);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await productModel.findByIdAndDelete(req.params.productid);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error while deleting product:", error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

module.exports = {
  createProduct,
  listProducts,
  productDetails,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductsByCategory,
};
