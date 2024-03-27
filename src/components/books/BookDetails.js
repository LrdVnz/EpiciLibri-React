import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { QueryContext } from "../../contexts/QueryContext";
import { Card, Col, Container } from "react-bootstrap";

const BookDetails = () => {
  const { query } = useContext(QueryContext);
  const { asin } = useParams();

  let book = query.find((book) => {
    if (book.asin === asin) {
      return book;
    }
  });

  return (
    <Container>
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <span> {book.category} </span>
              <span> € {book.price} </span>
              Asin: {book.asin}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default BookDetails;
