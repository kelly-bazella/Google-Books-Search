import React, {Component} from "react";
import { Container, Row, Col } from "../components/Grid";
import Input from "../components/Input";
import Button from "../components/Button/index"
// import { Container, Row, Col } from "./components/Grid";
// import { BookList, BookListItem } from "./components/BookList";
// import API from "./utils/API";

// const [books, setBooks] = useState([]);
// const [bookSearch, setBookSearch] = useState([]);

// const handleInputChange = (event) => {
//   const { value } = event.target;
//   setBookSearch(value);
// };

// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   API.getBooks(bookSearch)
//     .then((res) => {
//       console.log(res.data);
//       setBooks(res.data);
//     })
//     .catch((err) => console.log(err));
// };

function Search() {
  return (
    <div className="search">
      <form>
        <Container>
          <Row>
            <Col size="xs-9 sm-10">
              <Input
                name="bookSearch"
               // value={bookSearch}
               // onChange={handleInputChange}
                placeholder="Search for a Book..."
              />
            </Col>
            <Col size="xs-3 sm-2">
              <Button
              //  onClick={handleFormSubmit}
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
