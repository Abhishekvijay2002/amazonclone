const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const userid = req.userId.id;
    const productid = req.params.productid;

    const product = await productModel.findById(productid);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let cart = await cartModel.findOne({ userid });

    // if no cart yet, create one
    if (!cart) {
      cart = new cartModel({ userid, product: [] });
    }

    // check if product already in cart
    const productAlreadyExist = cart.product.some((item) =>
      item.productid.equals(productid)
    );

    if (productAlreadyExist) {
      return res.status(400).json({ error: "Product already exists in cart" });
    }

    // push new item
    cart.product.push({
      productid,
      price: product.price,
      quantity: 1,
    });

    // recalc total
    cart.calculateTotalprice();
    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// GET CART
const getcart = async (req, res) => {
  try {
    const userid = req.userId.id;

    const cart = await cartModel
      .findOne({ userid })
      .populate("product.productid"); // ref: "Product" in model

    // if cart not created yet, return empty cart instead of 404
    if (!cart) {
      return res
        .status(200)
        .json({ message: "Cart is empty", cart: { product: [], totalprice: 0 } });
    }

    res.status(200).json({ message: "Cart found", cart });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// REMOVE PRODUCT FROM CART
const removefromcart = async (req, res) => {
  try {
    const userid = req.userId.id;
    const { productid } = req.params;

    const cart = await cartModel.findOne({ userid });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    cart.product = cart.product.filter(
      (item) => !item.productid.equals(productid)
    );

    cart.calculateTotalprice();
    await cart.save();

    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

// INCREASE QUANTITY
const increasequantity = async (req, res) => {
  try {
    const userid = req.userId.id;
    const { productid } = req.params;

    const cart = await cartModel.findOne({ userid });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const productInCart = cart.product.find((p) =>
      p.productid.equals(productid)
    );
    if (!productInCart)
      return res.status(404).json({ error: "Product not in cart" });

    productInCart.quantity += 1;

    cart.calculateTotalprice();
    await cart.save();

    res.status(200).json({ message: "Quantity increased", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DECREASE QUANTITY
const decreasequantity = async (req, res) => {
  try {
    const userid = req.userId.id;
    const { productid } = req.params;

    const userCart = await cartModel.findOne({ userid });
    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const productIndex = userCart.product.findIndex((p) =>
      p.productid.equals(productid)
    );
    if (productIndex === -1) {
      return res.status(404).json({ error: "Product not in cart" });
    }

    // decrease qty or remove item
    if (userCart.product[productIndex].quantity > 1) {
      userCart.product[productIndex].quantity -= 1;
    } else {
      userCart.product.splice(productIndex, 1); // remove last item
    }

    // 🟢 If no items left, delete cart document
    if (userCart.product.length === 0) {
      await cartModel.deleteOne({ _id: userCart._id });
      return res
        .status(200)
        .json({ message: "Last item removed , so Cart is now empty", cart: null });
    }

    // otherwise recalc total and save
    userCart.calculateTotalprice();
    await userCart.save();

    res.status(200).json({ message: "Quantity decreased", cart: userCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {
  addToCart,
  getcart,
  removefromcart,
  decreasequantity,
  increasequantity,
};
