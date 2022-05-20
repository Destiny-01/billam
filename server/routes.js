const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const User = require("./User");
const Request = require("./Request");
const { uuid } = require("uuidv4");
require("dotenv").config();

router.post("/auth", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username, email });
    if (user) {
      const match = bcrypt.compareSync(password, user.password);
      if (!match) {
        return res
          .status(500)
          .json({ message: "Username or password do not match" });
      }
      // save to session
      return user;
    } else {
      const userr = await User.findOne({ username });
      if (userr) {
        return res
          .status(500)
          .json({ message: "Username not associated with email" });
      }
      console.log(password, email, username);
      const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      const newUser = new User({
        username,
        email,
        hash,
      });
      await newUser.save();
      req.session.user = newUser;
      req.session.save((err) => console.log(err));
      return newUser;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Request.find({});
    console.log(req.session.user);
    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.get("/products/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Request.findById(_id);
    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.post("/products/new", async (req, res) => {
  try {
    const { username, twitterLink, totalAmount, title, code } = req.body;
    if (code != process.env.SECRET_CODE) {
      return res.status(500).json({ message: "Wrong Code" });
    }
    const link = twitterLink.split("/");
    // process link
    const image = `https://ik.imagekit.io/tweetpik/1234566/${link[5]}`;
    const id = uuid();
    const url = "http://localhost:3000/";
    console.log(id);
    // const newRequest = new Request({
    //     username, image, totalAmount, title, userId: req.session.user._id
    // })
    // const product = await Request.findById();
    // return res.status(200).json({ newRequest });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
