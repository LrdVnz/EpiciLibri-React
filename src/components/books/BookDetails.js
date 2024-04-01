import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import { QueryContext } from "../../contexts/QueryContext";
import { Row, Card, Col, Container } from "react-bootstrap";
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
      <BasicNav showSearch={false} />
      <Container className={`bg-${theme}`} fluid style={{ height: "100vh" }}>
        <Row>
          <Col md={6}>
            <Row>
              <Col className="offset-md-3" md={6}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                </Card>
              </Col>
            </Row>
          </Col>

          <Col md={6} style={{ color: theme === "dark" ? "white" : "black" }}>
            <Row>
              <Col className="offset-md-2" md={8}>
                <h1>{book.title}</h1>
                <h3> {book.category} </h3>
                <h3> € {book.price} </h3>
                Asin: {book.asin}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <BasicFooter />
    </>
  );
};

export default BookDetails;
