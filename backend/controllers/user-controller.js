const User = require("../models/user-model");
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { username, email, password, confirmPassword, fullName, phoneNumber, dob, gender, city, country, terms } =
    req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already taken" });
      } else if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already in use" });
      }
    }

    const user = new User({
      username,
      email,
      password,
      fullName,
      phoneNumber,
      dob,
      gender,
      city,
      country,
      profession,
      terms,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ message: "Failed to register user" });
  }
};

exports.loginUser = async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
      return res.status(400).json({message:"Invalid email/username or password"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({message:"Invalid password"});
    }

    const token = jwt.sign({ id:user._id}, JWT_SECRET, { expiresIn : "1m"});
    res.status(200).json({token})
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const updateFields = req.body; 

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new:true});

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Failed to update user' });
  }
}