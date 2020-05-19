import React, { Component } from "react";
import Input from "../Input/index";
import BookList from "../BookList/index";
import API from "../../utils/API";
import { request } from "express";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      Input: "",
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.Input })
      .then((data) => {
        this.setState({ books: [...data.body.items] });
        console.log("BOOKS", data);
      });
  };

  handleSearch = (e) => {
    this.setState({ Input: e.target.value });
    console.log(e)
  };

  handleSaveBook = (id) => {
    console.log("onlick happen", id);
    API.saveBook({ id });
  };

  render() {
    return (
      <div className="Books">
        <Input searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <BookList books={this.state.books} saveBook={this.handleSavedBook} />
      </div>
    );
  }
}
export default Books;
