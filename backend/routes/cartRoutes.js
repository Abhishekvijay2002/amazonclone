const { addToCart, getcart, removefromcart, increasequantity, decreasequantity } = require("../controller/cartController");
const { authAdminOrUser } = require("../middleware/authmiddleware");

const cartRouter =require("express").Router();

cartRouter.post("/add/:productid",authAdminOrUser ,addToCart)
cartRouter.get("/" , authAdminOrUser ,getcart);
cartRouter.delete("/remove/:productid", authAdminOrUser ,removefromcart);
cartRouter.patch("/increase/:productid" , authAdminOrUser,increasequantity);
cartRouter.patch("/decrease/:productid" , authAdminOrUser,decreasequantity);


module.exports = cartRouter