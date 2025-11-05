const Book = require("../models/Book");

const addBook = async (req, res) => {
  try {
    const userId = req.user.id;

    let { bookName, category, price,  condition, coverImageUrl } = req.body;

    if (!bookName || !category || !price || !condition || !coverImageUrl) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    const newBook=await Book.create({
        bookName,
        price,
        condition,
        coverImageUrl,
        category,
        userId

    })
      console.log("adding book happening")

       res.status(200).json({
      success: true,
      data: newBook,
      message: "Book Added Successfully",
    })
    
    
  } catch (error) {
     console.error(error)
   res.status(500).json({
      success: false,
      message: "Failed to add Book",
      error: error.message,
    })

  }
};




const getMyBooks = async (req, res) => {
  try {

    const {id}=req.user
    console.log("id is getting",id)

    if(!id){
        return res.status(404).json({
        success: false,
        message: "Id is required",
      });
    }
    const books = await Book.find({userId:id});

    if (!books || books.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Books Found",
      });
    }

    res.status(200).json({
      success: true,
      data: books,
      message: "Books Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to Fetch Books",
      error: error.message,
    });
  }
};




module.exports={addBook,getMyBooks}

// List all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      success: true,
      data: books,
      message: "Books Fetched Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to Fetch Books",
      error: error.message,
    });
  }
};

module.exports = { addBook, getMyBooks, getAllBooks };