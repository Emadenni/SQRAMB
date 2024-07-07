const User = require("../models/user-model");

exports.registerUser = async (req, res) => {
  const { username, email, password, confirmPassword, fullName, phoneNumber, dob, gender, city, country, terms } =
    req.body;

  // Controlla se le password corrispondono
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    // Controlla se l'email è già in uso
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
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
      terms,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ message: "Failed to register user" });
  }
};
