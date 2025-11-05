// Import the required modules
const express = require("express")
const { addBook, getMyBooks, getAllBooks } = require("../controllers/book")
const { auth } = require("../middlewares/auth")

const router = express.Router()



router.post("/books", auth ,addBook)
router.get("/mybooks", auth, getMyBooks);
router.get("/books", auth, getAllBooks);



// Export the router for use in the main application
module.exports = router