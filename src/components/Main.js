import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import SingleBook from "./books/SingleBook";
import CommentArea from "./comments/CommentArea";

const Main = ({ books }) => {
  return (
    <>
      <Row className="gy-3">
        <Col md={6}>
          <Row className="gy-3">
            {books.map((book, index) => (
              <SingleBook book={book} key={index} />
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <Row className="gy-3">
            <CommentArea asin={""}></CommentArea>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Main;
