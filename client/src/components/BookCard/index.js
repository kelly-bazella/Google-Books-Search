import React from "react";

const BookCard = ({image, title, author, description, id, saveBook}) => {
    return(
        <div className="bookcard">
            <div className="card-container">
                <img src={image} alt="title" />
                <div className="desc">
                    <h1>{title}</h1>
                    <h2>{author}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <button onClick={() => saveBook(id)}>
            Save Book
            </button>
        </div>
    );
}

export default BookCard;