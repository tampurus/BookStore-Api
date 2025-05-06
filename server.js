require('dotenv').config(); 
const express = require('express');
const connectToDb = require('./database/db');
const bookRoutes = require('./routes/book-route');


const app = express();

const port = process.env.PORT;

// connnect to database 
connectToDb();

// middleware that will be default express one

app.use(express.json());

// routes here 
app.use("/api/books/",bookRoutes);

app.listen(port,()=>{ 
    console.log(`Server is running at port ${port}`)
}) 