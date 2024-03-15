import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import "./SingleBook.css"

const SingleBook = ({ book, key }) => {

  const [selected, setSelected] = useState(false);

  return (
    <Col md={2} key={key}>
      <Card style={{ width: "18rem" }} className = { selected ? "custom-bg-danger" : "" }>
        <Card.Img variant="top" src={book.img} onClick={() => ( selected ? setSelected(false) : setSelected(true) )} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <span> {book.category} </span>
            <span> € {book.price} </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
