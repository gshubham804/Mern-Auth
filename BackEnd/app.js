const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config()

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(
    `mongodb+srv://techphobiasuperb:${process.env.MONGODB_PASSWORD}@cluster0.zrmr3kr.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
    console.log("DB is connected! Listening to localhost 5000");
  })
  .catch((err) => {
    console.log(err);
  });