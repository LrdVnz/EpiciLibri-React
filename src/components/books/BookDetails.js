import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import { QueryContext } from "../../contexts/QueryContext";
import { Card, Col, Container } from "react-bootstrap";
import BasicNav from "../BasicNav";
import BasicFooter from "../BasicFooter";

const BookDetails = () => {
  const { query } = useContext(QueryContext);
  const { theme } = useContext(ThemeContext);

  const { asin } = useParams();

  let book = query.find((book) => {
    if (book.asin === asin) {
      return book;
    }
  });

  return (
    <>
     <BasicNav
        showSearch={false}
      />
    <Container className={`bg-${theme}`} fluid>
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
    <BasicFooter />
    </>
  );
};

export default BookDetails;
