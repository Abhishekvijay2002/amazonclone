

const { createProduct, listProducts, productDetails, searchProducts, getProductsByCategory, updateProduct, deleteProduct } = require('../controller/productController');
const { authAdmin } = require('../middleware/authmiddleware');
const upload = require('../middleware/multer');



const productRouter = require('express').Router()

productRouter.post("/create" ,authAdmin ,upload.array("image", 5), createProduct);
productRouter.get("/",listProducts);
productRouter.get("/:productid", productDetails );
productRouter.get("/search/all", searchProducts);
productRouter.get("/category/:category",getProductsByCategory);
productRouter.put("/:productid",authAdmin ,upload.array("image" , 5),updateProduct);
productRouter.delete("/:productid",authAdmin ,deleteProduct);




module.exports = productRouter