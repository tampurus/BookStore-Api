const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title :{
        type : String,
        required : [true,'Book title is required'],
        trim : true,
        maxLength : [100,'Book title cannot more than 100 characters '],
    },
    author :{
        type : String,
        required : [true,'Author name is required'],
        trim : true,
    },
    year : {
        type : Number,
        required: [true,'Year should be metion'],
        min : [1000,'year should be atleast 1000'],
        max : [new Date().getFullYear(),'Year cannot be in future'],
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
})
module.exports = mongoose.model('Book',bookSchema);