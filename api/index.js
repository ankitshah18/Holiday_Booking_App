// const express = require("express");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const mongoose = require("mongoose");
// const User = require("./models/User");
// const cookieParser = require("cookie-parser");

// const app = express();

// const bcryptSalt = bcrypt.genSaltSync(10);
// const jwtSecret = "bookingApp";

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//   })
// );

// // console.log(process.env.MONGO_URL);
// mongoose.connect(process.env.MONGO_URL);

// app.get("/test", (req, res) => {
//   res.json("test ok");
// });

// app.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const user = await User.create({
//       name,
//       email,
//       password: bcrypt.hashSync(password, bcryptSalt),
//     });
//     res.json(user);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (user) {
//     const passOk = bcrypt.compareSync(password, user.password);
//     if (passOk) {
//       jwt.sign(
//         { email: user.email, id: user._id },
//         jwtSecret,
//         { expiresIn: "30d" },
//         (err, token) => {
//           if (err) throw err;
//           res.cookie("token", token).json(user);
//         }
//       );
//     } else {
//       res.status(422).json("pass not ok");
//     }
//   } else {
//     res.json("not found");
//   }
// });

// app.get("/profile", (req, res) => {
//   res.json("user info");
// });

// app.listen(5000, (req, res) => {
//   console.log("Lisetening on 5000");
// });

// // const { token } = req.cookies;
// // if (token) {
// //   jwt.verify(token, jwtSecret, {}, async (err, user) => {
// //     if (err) throw err;
// //     const { name, emai, _id } = await User.findById(user.id);

// //     res.json({ name, emai, _id });
// //   });
// // } else {
// //   res.json(null);
// // }
// // res.json("user info");
