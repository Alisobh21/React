import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ succes: false, message: "User Doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ succes: false, message: "Password Wrong" });
    }
    const token = createToken(user._id);
    return res.json({ succes: true, token });
  } catch (e) {
    return res.json({ succes: false, message: `Something went Wrong ${e}` });
  }
};

//Create Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Sign-Up User
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  console.log(name, password, email);
  try {
    //Checking User Email exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ succes: false, message: "Email alreay used" });
    }
    //vaildating Email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({ succes: false, message: "Email not vaild" });
    }
    if (password.length < 8) {
      return res.json({
        succes: false,
        message: "Password must be more than 8 charaters",
      });
    }
    //hasing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    return res.json({ succes: true, token: token });
  } catch (e) {
    return res.json({ succes: false, message: `something goes wrong ${e}` });
  }
};

export { loginUser, registerUser };
