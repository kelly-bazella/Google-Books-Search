import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>React Books Search</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books/docs/v1/using">
        Powered by Google Books API
      </a>
    </div>
  );
}

export default Jumbotron;
