import express from "express";
// import User from "../models/User.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const router = express.Router();
import jwt from "jsonwebtoken";
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ message: "User already exists", success: false });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not exist", success: false });
    }
console.log(password,user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Incorrect password", success: false });
    }
    const loginToken = jwt.sign({ id: user._id }, "secretkeyofnoteapp123#", {
      expiresIn: "1h",
    });
    return res
      .status(200)
      .json({
        message: "Login successful",
        success: true,
        token: loginToken,
        user: { name: user.name },
      });

    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
});
export default router;
