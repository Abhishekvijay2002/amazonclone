



const { register, login, googleAuth, getuser, updateuser, deleteUser, GetallUsers, logout } = require('../controller/userController');
const { authAdminOrUser, authAdmin } = require('../middleware/authmiddleware');

const userRouter = require('express').Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout",logout)
userRouter.post("/google", googleAuth);
userRouter.get("/getuser", authAdminOrUser, getuser);
userRouter.put("/update", authAdminOrUser, updateuser);

userRouter.delete("/delete/:id", authAdminOrUser, deleteUser);
userRouter.get("/allusers", authAdmin, GetallUsers);

module.exports = userRouter;
