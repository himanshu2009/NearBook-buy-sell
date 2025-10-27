const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  condition: {
    type: String,
    enum: ["New", "Like New", "Used", "Old"],
    required: true,
  },
  coverImageUrl: { type: String, required: true },
  userId: { type: String, required: true, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Book", bookSchema);
