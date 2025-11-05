// Importing necessary modules and packages
const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
// const profileRoutes = require("./routes/profile");
const BookRoutes = require("./routes/Book");
// const paymentRoutes = require("./routes/Payments");
// const contactUsRoute = require("./routes/Contact");

const cookieParser = require("cookie-parser");
const cors = require("cors");
// const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("multer");
const dotenv = require("dotenv");

const mongoose = require("mongoose");


// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();


// const allowedOrigins = ["http://localhost:3000", "http://localhost:3001","http://localhost:9000","https://9000-firebase-studio-1761144533638.cluster-ancjwrkgr5dvux4qug5rbzyc2y.cloudworkstations.dev"];

 
// Middlewares
app.use(express.json());
app.use(cookieParser());


// OR: Allow dynamic origin based on request
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// app.use(
// 	cors({
		
// 		origin:function(origin,callback){
// 			if(!origin) return callback(null,true)
// 		if(allowedOrigins.includes(origin)){
// 			return callback(null,true)
// 		}
// 		else{
// 			return callback(new Error("Not Allowed By Cors"))
// 		}
// 		},
// 		credentials:true
// 	})
// );
// app.use(
// 	fileUpload({
// 		useTempFiles: true,
// 		tempFileDir: "/tmp/",
// 	})
// );

// Connecting to cloudinary
// cloudinaryConnect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1", BookRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});



mongoose.connect("mongodb://localhost:27017/Ex-Libris")
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ Connection error:", err));

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});



// End of code.
