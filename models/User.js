const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    contactNumber: {
		type: Number,
		trim: true,
	},
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  
    address: {
      type: String,
    },
   
    avatarUrl: {
      type: String, // user profile image
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    // Books listed by this user
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
