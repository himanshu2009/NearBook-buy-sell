const Book = require("../models/Book");

const addBook = async (req, res) => {
  try {
    // const userId = req.user.userId;

    let { bookName, category, price, userId, condition, coverImageUrl } = req.body;

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

    const {_id}=req.user

    if(!_id){
      
    }
    const books = await Book.find({_id});

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
