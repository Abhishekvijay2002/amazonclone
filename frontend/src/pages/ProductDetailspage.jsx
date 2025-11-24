
// src/pages/ProductDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrowsingHistory from "../components/BrowsingHistory";

import {
  getProductDetails,
  addToCart,
  addReview,
  getReviewsByProduct,
  deleteReview,
} from "../Services/UserApi";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [error, setError] = useState("");

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // ✅ Fetch product details
  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await getProductDetails(productId);
      setProduct(res.data.product || res.data);
    } catch (err) {
      setError("Failed to load product details");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch reviews
  const fetchReviews = async () => {
    try {
      const res = await getReviewsByProduct(productId);
      setReviews(res.data.reviews || []);
    } catch (err) {
      console.error("Error loading reviews:", err);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
      fetchReviews();
    }
  }, [productId]);

  // ✅ Add to cart
  const handleAddToCart = async () => {
    try {
      await addToCart(productId);
      alert("Product added to cart ✅");
    } catch (err) {
      alert("Failed to add to cart");
    }
  };

  // ✅ Add review
  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return alert("Comment is required");

    try {
      setReviewLoading(true);
      await addReview(productId, { rating, comment });
      setComment("");
      setRating(5);
      await fetchReviews();
      alert("Review added ✅");
    } catch (err) {
      alert("Failed to add review");
    } finally {
      setReviewLoading(false);
    }
  };

  // ✅ Delete review
  const handleDeleteReview = async (reviewId) => {
    if (!window.confirm("Delete this review?")) return;

    try {
      await deleteReview(reviewId);
      await fetchReviews();
    } catch (err) {
      alert("Failed to delete review");
    }
  };

  if (loading) return <p>Loading product…</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found</p>;

  const mainImage =
    Array.isArray(product.image)
      ? product.image[0]?.url || product.image[0]
      : product.image || product.img;

  return (
    <div className="bg-white p-4 max-w-full mx-auto">
      {/* PRODUCT SECTION */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full max-h-[400px] object-contain"
          />
        </div>

        <div className="col-span-7 space-y-3">
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-lg font-bold">₹{product.price}</p>

          <button
            onClick={handleAddToCart}
            className="bg-yellow-400 px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* ✅ REVIEWS SECTION */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>

        {/* ADD REVIEW FORM */}
        <form onSubmit={handleAddReview} className="mb-6 space-y-3">
          <div>
            <label className="text-sm font-medium">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="block border p-1"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Star
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Comment</label>
            <textarea
              className="w-full border p-2 text-sm"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button
            disabled={reviewLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {reviewLoading ? "Submitting..." : "Submit Review"}
          </button>
        </form>

        {/* REVIEWS LIST */}
        {reviews.length === 0 ? (
          <p className="text-sm text-gray-500">No reviews yet</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((rev) => (
              <div
                key={rev._id}
                className="border p-3 rounded bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm">
                    {rev.user?.name || "User"}
                  </p>

                  <button
                    onClick={() => handleDeleteReview(rev._id)}
                    className="text-xs text-red-500"
                  >
                    Delete
                  </button>
                </div>

                <p className="text-yellow-500 text-sm">
                  {"★".repeat(rev.rating)}
                </p>

                <p className="text-sm mt-1">{rev.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <BrowsingHistory />
    </div>
  );
}
