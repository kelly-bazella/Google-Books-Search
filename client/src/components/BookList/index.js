import React from "react";
import BookCard from "./BookCard";

const BookList = ({books, saveBook}) => {
  return(
    <div className="booklist">
      {books.map((book) => {
        return(
          <div>
            <BookCard 
            key={book.id}
            id={book.id}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.author}
            description={book.volumeInfo.description}
            saveBook={saveBook}
            />
          </div>
          
        )
      })}
    </div>
  )
};

export default BookList;