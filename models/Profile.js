const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
	},
	gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	about: {
		type: String,
		trim: true,
	},
	
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);
