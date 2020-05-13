import React from "react";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-12 sm-12">
            <h3>{props.title}</h3>
            <p>
             "Book about SOMETHING"
            </p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
