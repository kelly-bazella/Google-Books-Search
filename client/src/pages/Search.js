import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import Input from "../components/Input";
import BookList from "../components/BookList";
import API from "../utils/API";

class Search extends Component {

  state = {
    books:[],
    bookSearch:"",
    savedBooks:[],
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({bookSearch:value})
   // setBookSearch(value);
   console.log(value)
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchBooks(this.state.bookSearch)
      .then((res) => {
        const bookList = res.data.items.map(book => {
          
          const { id,volumeInfo } = book
          const myObj = {
            googleId: id,
            title: volumeInfo.title,
            author: volumeInfo.authors[0],
            description: volumeInfo.description,
            href: volumeInfo.canonicalVolumeLink,
            thumbnail: volumeInfo.imageLinks.thumbnail
          }
          return(myObj)
        })
        this.setState({books:bookList})
          console.log(this.state.books);
          // setBookSearch(res.data);
      })
      .catch((err) => console.log(err));
  };

  handleSave=(event, googleId, title, author, description, href, thumbnail) => {
    event.preventDefault();
   API.saveBook({googleId, title, author, description, href, thumbnail}).then (res => this.loadSavedBooks)
  }

  loadSavedBooks = () => {
    API.getSavedBooks().then(res => {
      this.setState({savedBooks: res.data});
    })
  }

  render(){
    return (
      <div className="search">
        <Container>
          <Row>
            <Col size="xs-12 sm-12">
              <Input
                name="bookSearch"
                value={this.state.bookSearch}
                onChange={this.handleInputChange}
                placeholder="Search for a Book..."
                onSubmit={this.handleFormSubmit}
              />
            </Col>
          </Row>
          <Row>
            <BookList 
            books = {this.state.books}
            saveBook = {this.saveBook}
            />
          </Row>
        </Container>
      </div>
    );
  }

}

export default Search;
