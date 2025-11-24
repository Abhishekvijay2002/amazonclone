
const Order = require("../models/orderModel");
const Review = require("../models/reviewModel");
const Product = require("../models/productModel");

const createReview = async (req, res) => {
  try {
    const userId = req.userId.id;         
    const { productId } = req.params;
    const { rating, comment } = req.body;  

    if (!rating || !comment) {
      return res
        .status(400)
        .json({ success: false, error: "Rating and comment are required" });
    }

    //  only DELIVERED orders can review 
    /*
    const deliveredOrder = await Order.findOne({
      user: userId,                
      "product.productid": productId,
      orderstatus: "delivered",
    });

    if (!deliveredOrder) {
      return res.status(403).json({
        success: false,
        error:
          "You can only review products that have been delivered to you.",
      });
    }
    */

    //  only users who PLACED an order can review 
    
    const placedOrder = await Order.findOne({
      user: userId,
      "product.productid": productId,
      orderstatus: "pending",
    });

    if (!placedOrder) {
      return res.status(403).json({
        success: false,
        error: "You can only review products that you have ordered.",
      });
    }


  // Allow only one review per user per product
    const existingReview = await Review.findOne({
      product: productId,
      user: userId,
    });

    if (existingReview) {
      return res.status(409).json({
        success: false,
        error: "You can only review a product once.",
      });
    }

    // 3. Create the review
    const review = await Review.create({
      product: productId,
      user: userId,
      rating,
      comment, 
    });

    const stats = await Review.aggregate([
      { $match: { product: review.product } },
      {
        $group: {
          _id: "$product",
          avgRating: { $avg: "$rating" },
          totalRatings: { $sum: 1 },
        },
      },
    ]);

    if (stats.length > 0) {
      await Product.findByIdAndUpdate(productId, {
        rating: stats[0].avgRating,
        ratingCount: stats[0].totalRatings,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Review added successfully",
      review,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};


// GET REVIEWS FOR A PRODUCT
const getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await Review.find({ product: productId }).populate(
      "user",
      "name"
    );

    return res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};


// GET ALL REVIEWS (for admin / debugging)
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("user", "name")
      .populate("product", "title");

    return res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: error.message || "Internal Server Error" });
  }
};


// DELETE REVIEW
const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    await Review.findByIdAndDelete(reviewId);

    return res
      .status(200)
      .json({ success: true, message: "Review deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};


module.exports = {
  createReview,
  getReviewsByProduct,
  getAllReviews,
  deleteReview,
};
