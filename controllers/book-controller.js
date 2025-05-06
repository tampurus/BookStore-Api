
const Book = require('../models/book');


const getAllBooks = async (req,res)=>{
    try{
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(201).json({
                success : true,
                message : `There are ${allBooks?.length} books present :-)`,
                dat : allBooks,
            })
        }
        else{
            res.status(404).json({
                success : false,
                message : "No books found in databse :-(",
            })
        }
    }catch(e){
        console.log('ERROR => ',e);
        res.status(500).json({
            success : false,
            message : "Something went wrong :-(",
        })
    }
}

const getSingleBookById = async (req,res)=>{
    try{
        const getCurrentBookId = req.params.id;
        const bookDetailsById = await Book.findById(getCurrentBookId);
        if(!bookDetailsById){
            return res.status(404).json({
                success : false,
                message : "Book not found with the ID :-(",
            })
        }
        res.status(201).json({
            success : true,
            message : "Book feteched :-)",
            data : bookDetailsById,
        })
    }catch(e){
        console.log('ERROR => ',e);
        res.status(500).json({
            success : false,
            message : "Something went wrong :-(",
        })
    }
}

const addNewBook = async (req,res)=>{
    try{
        const newlyCreatedBook = await Book.create(req.body);
        if(!newlyCreatedBook){
            return res.status(404).json({
                success : false,
                message : "Please enter valid thing",
            })
        }
        res.status(201).json({
            succes : true,
            message : "Book added successfully",
            data : newlyCreatedBook,
        })
    }
    catch(error){
        console.log('ERROR => ',error);
        res.status(500).json({
            success : false,
            message : "Error while adding new book :-(",
        })
    }
}

const updateBook = async (req,res)=>{
    try{
        const updatedBookFormData = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id,updatedBookFormData,{new : true});
        if(!updatedBook){
            return res.status(404).json({
                success : false,
                message : "Book not found with the ID :-(",
            })
        }
        res.status(201).json({
            success : true,
            message : "Book updated successfully :-)",
            data : updatedBook,
        })

    }
    catch(e){
        console.log('ERROR => ',e);
        res.status(500).json({
            success : false,
            message : "Something went wrong :-(",
        })
    }
}
const deleteBook = async (req,res)=>{
    try{
        const currentBookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(currentBookId);
        if(!deletedBook){
            return res.status(404).json({
                success : false,
                message : "Book not found with the ID :-(",
            })
        }
        res.status(201).json({
            success : true,
            message : "Book Deleted successfully :-)",
            data : deletedBook,
        })
    }
    catch(e){
        console.log('ERROR => ',e);
        res.status(500).json({
            success : false,
            message : "Something went wrong :-(",
        })
    }
}

module.exports = {
    getAllBooks,
    addNewBook,
    getSingleBookById,
    deleteBook, 
    updateBook,
};