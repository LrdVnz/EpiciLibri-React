import { Card, Col, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SingleBook.css";

import { SelectedContext } from "../../contexts/SelectedContextProvider";

const SingleBook = ({ book }) => {
  const { selected, setSelected } = useContext(SelectedContext);
  const [clicked, setClicked] = useState(false);

  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      className="custom-hover"
      onClick={() => {
        if (clicked) {
          setClicked(false);
        } else {
          setSelected(book.asin);
          setClicked(true);
        }
      }}
    >
      <Card
        style={{ width: "18rem" }}
        className={selected === book.asin && "custom-bg-danger "}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <span> {book.category} </span>
            <span> € {book.price} </span>
            Asin: {book.asin}
          </Card.Text>
          <Button>
            <Link to={"/" + book.asin} className="text-dark">Dettagli</Link>{" "}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
