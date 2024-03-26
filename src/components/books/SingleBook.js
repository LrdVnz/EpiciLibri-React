import {Card, Col} from "react-bootstrap";
import { useContext, useState } from "react";
import "./SingleBook.css";

import { SelectedContext } from "../../contexts/SelectedContextProvider";

const SingleBook = ({ book }) => {
  const { setSelected } = useContext(SelectedContext);
  const [clicked, setClicked] = useState(false);

  const margin = " m-auto";

  return (
    <Col sm={12} md={6} lg={4}
    className="custom-hover"
      onClick={() => {
        if (clicked) {
          setClicked(false);
        } else {
          setSelected(book.asin)
          setClicked(true);
        }
      }}
    >
      <Card
        style={{ width: "18rem" }}
        className={`${clicked ? "custom-bg-danger" : ""}`  + margin }
      >
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
  );
};

export default SingleBook;
