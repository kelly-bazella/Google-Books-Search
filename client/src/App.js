import React, { useState } from "react";
import "./App.css";
import Nav from "../src/components/Nav";
import Jumbotron from "../src/components/Jumbotron";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import { Container, Row, Col } from "./components/Grid";
import {BookList, BookListItem} from "./components/BookList";
import API from "./utils/API";

function App() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState([]);

const handleInputChange = event => {
  const {value} = event.target;
  setBookSearch(value);
}

const handleFormSubmit = event => {
  event.preventDefault();
  API.getBooks(bookSearch)
  .then(res => {
    console.log(res.data)
    setBooks(res.data)
  })
  .catch(err => console.log(err))
};

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <form>
      <Container>
        <Row>
          <Col size="xs-9 sm-10">
            <Input
              name="bookSearch"
              value={bookSearch}
              onChange={handleInputChange}
              placeholder="Search for a Book..."
            />
          </Col>
          <Col size="xs-3 sm-2">
            <Button
              onClick = {handleFormSubmit}
              type="success"
              className="input-lg"
            >Search</Button>
          </Col>
        </Row>
      </Container>
      </form>
      <Container>
      <Row>
        <Col size="sx-12">
         <h1>Book render here</h1>
        </Col>
      </Row>
      </Container>
     
    </div>
  );
}

export default App;
