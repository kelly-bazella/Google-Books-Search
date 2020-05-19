import React from "react";
import BookCard from "../BookCard";

const BookList = ({books, saveBook}) => {
  return(
    <div className="booklist">
      {books.map((book) => {
        return(
          <div key={book.googleId}>
            <BookCard 
            key={book.googleId}
            id={book.googleId}
            thumbnail={book.thumbnail}
            title={book.title}
            author={book.author}
            href={book.href}
            description={book.description}
            saveBook={saveBook}
            />
          </div>
          
        )
      })}
    </div>
  )
};

export default BookList;