<<<<<<< HEAD
# BookStore-Api
=======
# BookStore API

A RESTful API for managing books built with Node.js, Express, and MongoDB.

## Setup

1. Clone the repository
```bash
git clone <your-repo-url>
```

2. Install dependencies
```bash
npm install
```

3. Create .env file in root and add:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

4. Run the server
```bash
npm run dev
```

## API Endpoints

- GET `/api/books/get` - Get all books
- GET `/api/books/get/:id` - Get single book
- POST `/api/books/add` - Add new book
- PUT `/api/books/update/:id` - Update book
- DELETE `/api/books/delete/:id` - Delete book

## Environment Variables

- `PORT` - Server port (default: 3000)
- `MONGODB_URI` - MongoDB connection string
>>>>>>> 5e9898d (Initial commit: BookStore API)
