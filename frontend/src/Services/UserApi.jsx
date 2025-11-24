import { axiosInstance } from "../Axios/Axiosinstance";

// login
export const userLogin = (data) => {
  return axiosInstance.post("/user/login", data);
};

// registration
export const userRegister = (data) => {
  return axiosInstance.post("/user/register", data);
};

// GOOGLE LOGIN
export const googleLogin = (code) => {
  return axiosInstance.post("/user/google", { code });
};

// List all products
export const listProducts = (params) => {
  return axiosInstance.get("/product", { params });
};

// Product details
export const getProductDetails = (productId) => {
  return axiosInstance.get(`/product/${productId}`);
};



// Add to cart
export const addToCart = (productId) => {
  return axiosInstance.post(`/cart/add/${productId}`);
};

// Get my cart
export const getCart = () => {
  return axiosInstance.get("/cart");
};

// Remove from cart
export const removeFromCart = (productId) => {
  return axiosInstance.delete(`/cart/remove/${productId}`);
};

// Increase quantity
export const increaseCartQuantity = (productId) => {
  return axiosInstance.patch(`/cart/increase/${productId}`);
};

// Decrease quantity
export const decreaseCartQuantity = (productId) => {
  return axiosInstance.patch(`/cart/decrease/${productId}`);
};

// Place order
export const placeOrder = (orderData) => {
  // orderData: {  address, paymentMethod }
  return axiosInstance.post("/order/place", orderData);
};

// Get my orders 
export const getMyOrders = () => {
  return axiosInstance.get("/order/myorders");
};

// Cancel order 
export const cancelOrder = (orderId, data = {}) => {
  return axiosInstance.patch(`/order/cancel/${orderId}`, data);
};

// Add review for a product
export const addReview = (productId, reviewData) => {
  // reviewData: { rating, comment, }
  return axiosInstance.post(`/review/add/${productId}`, reviewData);
};
// get review of a product 
export const getReviewsByProduct = (productId) => {
  return axiosInstance.get(`/review/product/${productId}`);
};

// deleteReview

export const deleteReview = (reviewId) => {
  return axiosInstance.delete(`/review/${reviewId}`);
};
