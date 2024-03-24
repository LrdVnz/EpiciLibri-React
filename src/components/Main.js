import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import SingleBook from "./books/SingleBook";
import CommentArea from "./comments/CommentArea";
import SelectedContextProvider from "../contexts/SelectedContextProvider";

const Main = ({ books }) => {
  let commentAreaStyle = {
    position: "sticky",
    top: 0
  };

  return (
    <>
      <SelectedContextProvider>
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
              <CommentArea asin={""} 
              style={commentAreaStyle}>

              </CommentArea>
            </Row>
          </Col>
        </Row>
      </SelectedContextProvider>
    </>
  );
};

export default Main;
