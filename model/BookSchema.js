import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true

    },
    price: {
        type: Number,
        required:true
    },
    category: {
        type: String,
        required:true

    },
    Image: {
        type: String,
        default: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?ga=GA1.1.1693676524.1732481576&semt=ais_hybrid"
    }

},{timestamps:true})
const Book = mongoose.model("Book", bookSchema);
export default Book;