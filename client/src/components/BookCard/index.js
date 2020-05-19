import React from "react";

const BookCard = ({ thumbnail, title, author, href, description, id, saveBook }) => {
  return (
    <div className="bookcard">
        <div className="card-container">
            <br />
            <img src={thumbnail} alt="title" />
            <div className="desc">
                <h3>{title}</h3>
                <h4>{author}</h4>
                <p>{description}</p>
                <a href={href}>Learn More</a>
            </div>
    <button className="btn" onClick={() => saveBook(id)}>
    Save Book
  </button>
        </div>
    </div>

  );
};

export default BookCard;
