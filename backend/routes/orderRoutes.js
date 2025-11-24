const { addOrder, getOrders, getAllOrders, updateOrder, cancelOrder } = require('../controller/orderController');
const { authAdminOrUser, authAdmin } = require('../middleware/authmiddleware');

const orderRouter =require('express').Router();

orderRouter.post("/place",authAdminOrUser, addOrder);
orderRouter.get("/myorders", authAdminOrUser , getOrders);
orderRouter.get("/all", authAdmin ,getAllOrders); 
orderRouter.patch("/update/:id",authAdmin, updateOrder);
orderRouter.patch("/cancel/:id",authAdminOrUser, cancelOrder);

module.exports = orderRouter 