import React, {Component, useState} from "react";
import { Container, Row, Col } from "../components/Grid";
import Input from "../components/Input";
import Button from "../components/Button/index"
//import { BookList, BookListItem } from "./components/BookList";
import API from "../utils/API";



function Search() {
  //const [books, setBooks] = useState([]);
const [bookSearch, setBookSearch] = useState([]);

const handleInputChange = (event) => {
  const { value } = event.target;
  setBookSearch(value);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  API.searchBooks(bookSearch)
    .then((res) => {
      console.log(res.data);
      setBookSearch(res.data);
    })
    .catch((err) => console.log(err));
};
  return (
    <div className="search">
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
              onClick={handleFormSubmit}
                type="success"
                className="input-lg"
              >
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default Search;
