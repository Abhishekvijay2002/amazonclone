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

const allowedOrigins = [
  process.env.FRONTEND_URL, 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

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
