const express = require("express");
const authRoutes = require("./Routes/Auth.routes");
const userRoutes = require("./Routes/User.routes");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use(bodyParser.json());
app.use(cookieParser());

// app.use((req,res,next)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*', )
//     res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//     next();
// })

app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/", (req, res) => {
  res.send("hlw");
});
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://test2:amardeep885@cluster0.blfflhg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080, (req, res) => {
      console.log("server is started");
    });
  })
  .catch((err) => console.log(err));
