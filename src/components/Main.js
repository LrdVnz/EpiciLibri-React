import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Main = ({ books }) => {
  return books.map((book, index) => (
    <Col md={2} key={index}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <span> {book.category} </span>
            <span> € {book.price} </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default Main;
