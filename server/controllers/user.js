import User from "../models/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const extingingUser = await User.findOne({ email });
    if (!extingingUser)
      return res.status(404).json({ message: "User does not exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      extingingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: extingingUser.email, id: extingingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.staus(200).json({ result: extingingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const extingingUser = await User.findOne({ email });
    if (extingingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.staus(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
