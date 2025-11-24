const cartRouter = require("./cartRoutes")
const orderRouter = require("./orderRoutes")
const productRouter = require("./productRoutes")
const reviewRouter = require("./reviewRoutes")
const userRouter = require("./userRoutes")
const manageRouter = require("express").Router()



manageRouter.use("/product" , productRouter)
manageRouter.use("/cart",cartRouter)
manageRouter.use("/order",orderRouter)
manageRouter.use("/review",reviewRouter)
manageRouter.use("/user",userRouter)



module.exports = manageRouter