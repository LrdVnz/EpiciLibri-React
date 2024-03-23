import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import SingleBook from "./books/SingleBook";
import CommentArea from "./comments/CommentArea";
import SelectedContextProvider from "../contexts/SelectedContextProvider";

const Main = ({ books }) => {
  return (
    <>
      <Row className="gy-3">
        <Col md={6}>
          <SelectedContextProvider>
            <Row className="gy-3">
              {books.map((book, index) => (
                <SingleBook book={book} key={index} />
              ))}
            </Row>
          </SelectedContextProvider>
        </Col>
        <Col md={6}>
          <SelectedContextProvider>
            <Row className="gy-3">
              <CommentArea asin={""}></CommentArea>
            </Row>
          </SelectedContextProvider>
        </Col>
      </Row>
    </>
  );
};

export default Main;
