import Book from "../model/BookSchema.js";
// import {query}  from 'express'


export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Errer:", error.message);
    res.status(500).json(error)
  }
}

export const allbooks = async (req, res) => {
  const { Name, title, price, category, Image } = req.body
  try {
    const findbook = await Book.find({ category })
    if (findbook) {
      res.json({ msg: "all books gsting successfully", success: true, findbook })
      console.log(findbook)
    }
    else {
      res.json({ msg: "error", error: error.message, success: false })

    }
  } catch (error) {
    res.json({ msg: "not geting the books ", error: error.message })
  }
}



export const Addbook = async (req, res) => {
  const { Name, title, price, category, Image } = req.body;
  try {
    const book = await Book.findOne({ Name })
    console.log(book)
    if (book) {
      return res.status(400).json({ msg: "Book already exist", success: false })
    } else {
      const newbook = await Book.create({ Name, title, price, category, Image })
      res.json({ msg: "book added seccssfully", newbook })
    }
  } catch (error) {
    res.json({ msg: "book not added", success: false, error: error.message })
  }



}
export const findfreebook = async (req, res) => {
  try {
    const freebook = await Book.find({ category: "free" })
    if (!freebook) {
      return res.json({ msg: "No free book found", success: false })
    }
    res.json({ msg: "free book found", freebook })

  } catch (error) {
    res.json({ msg: "free book not found", success: false, error: error.message })

  }
}
export const findpaidbook = async (req, res) => {
  try {
    const paidbook = await Book.find({ category: "paid" })
    if (paidbook.length <= 0) {
      return res.json({ msg: "No paid book found", success: false })
    }
    else{
      res.json({ msg: "paidbook found", paidbook })
    }
    

  } catch (error) {
    res.json({ msg: "paid book not found", success: false, error: error.message })

  }
}

export const deleteBooks = async (req, res) => {

  try {
    const bookId = req.params._id


    const book = await Book.findByIdAndDelete(bookId)

    if (!book) {
      res.json({ msg: "book not found", success: false, error: error.message })
    } else {
      res.json({ msg: "book deleted successfully", success: true, book })
    }
  } catch (error) {
    res.json({ msg: "books not deleted", success: false, error: error.message })
  }

}









