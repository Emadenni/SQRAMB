const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  role: { type: String, default: "user" },
  profession : { type: String, default:""}
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
