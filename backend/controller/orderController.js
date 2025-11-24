// controllers/orderController.js

const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");        
const mongoose = require("mongoose");
const productModel = require("../models/productModel");

// PLACE ORDER
const addOrder = async (req, res) => {
  try {
    const userid = new mongoose.Types.ObjectId(req.userId.id);
    const { address, paymentMethod } = req.body;

    // get cart
    const cart = await Cart.findOne({ userid }).populate("product.productid");

    if (!cart || cart.product.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // calculate total
    const totalAmount = cart.product.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // create order
    const order = new Order({
      user: userid,
      product: cart.product.map((item) => ({
        productid: item.productid,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount,
      address,
      paymentMethod, // ✅ added
      orderstatus: "pending",
    });

    await order.save();

    // clear cart
    await Cart.findOneAndDelete({ userid });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

// GET USER ORDERS
const getOrders = async (req, res) => {
  try {
    const userId = req.userId.id;

    const orders = await Order.find({ user: userId })
      .populate("product.productid")   // ✅ THIS LINE ADDED
      .sort({ createdAt: -1 });

    if (!orders.length) {
      return res.status(200).json({ message: "No orders yet", orders: [] });
    }

    res.status(200).json({ message: "Orders found", orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};



const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE ORDER STATUS
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderstatus } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { orderstatus },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res
      .status(200)
      .json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

// CANCEL ORDER (USER)
const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (order.orderstatus !== "pending") {
      return res.status(400).json({ error: "Order cannot be canceled" });
    }

    order.orderstatus = "cancelled";
    await order.save();

    res.status(200).json({ message: "Order cancelled successfully", order });
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

module.exports = {
  addOrder,
  getOrders,
  getAllOrders,
  updateOrder,
  cancelOrder,
};
