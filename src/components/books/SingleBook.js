import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useContext, useEffect, useState } from "react";
import "./SingleBook.css";

import { SelectedContext } from "../../contexts/SelectedContextProvider";

const SingleBook = ({ book }) => {
  const { selected, setSelected } = useContext(SelectedContext);
  const [clicked, setClicked] = useState(false);

  const margin = " m-auto";

  return (
    <Col sm={12} md={6} lg={4}
      onClick={() => {
        if (clicked) {
          setClicked(false);
        } else {
          setSelected(book.asin)
          setClicked(true);
          
          console.log("sono stato cliccato senpai >°///°<")
          console.log(selected)
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
