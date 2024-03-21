import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";
import { useState } from "react";
import "./SingleBook.css";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Col sm={12} md={6} lg={4} xl={2} >
      <Card
        style={{ width: "18rem" }}
        className={`${selected ? "custom-bg-danger" : ""}` + " m-auto"}
      >
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => (selected ? setSelected(false) : setSelected(true))}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <span> {book.category} </span>
            <span> € {book.price} </span>
            Asin: {book.asin}
          </Card.Text>
        </Card.Body>
        {selected && <CommentArea asin={book.asin} />}
      </Card>
    </Col>
  );
};

export default SingleBook;
