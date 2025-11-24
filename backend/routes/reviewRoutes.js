const { createReview, getAllReviews, getReviewsByProduct, deleteReview } = require('../controller/reviewController');
const { authAdminOrUser, authAdmin } = require('../middleware/authmiddleware');

 const reviewRouter =  require('express').Router();

reviewRouter.post("/add/:productId", authAdminOrUser, createReview);
reviewRouter.get("/product/:productId", getReviewsByProduct);
reviewRouter.get("/",authAdmin ,getAllReviews);
reviewRouter.delete("/:reviewId", authAdminOrUser, deleteReview);

module.exports = reviewRouter;






module.exports = reviewRouter
 