const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const manageRouter = require('./routes/routeManager');
const dotenv = require('dotenv').config()
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors()) 

mongoose.connect(process.env.database_connect).then((res) =>{
    console.log("DataBase Connection Successful");
}).catch((err) =>{
    console.log(err);
})
app.use("",manageRouter)

app.get("/", (req ,res ) => {
    res.json("server started")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
