import { useContext, useState, useEffect } from "react";

import { Button, Form, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const CommentForm = ({
  handleSubmit,
  comment,
  setComment,
  setVote,
  vote,
  title,
  isModify,
}) => {
  const { theme } = useContext(ThemeContext);
  const [themeClass, setThemeClass] = useState("dark-theme");

  let margin = " m-2";
  useEffect(() => {
    theme === "dark"
      ? setThemeClass("dark-theme")
      : setThemeClass("white-theme");
  }, [theme]);

  return (
    <Form
      className={"p-2 " + themeClass}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Row className="align-items-end">
        <Col md={isModify && 12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={margin}> {title} </Form.Label>
            <Form.Control
              className={margin}
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={isModify && 12}>
          <Form.Group>
            <Form.Label
              className={isModify ? "white-theme" : themeClass + margin}
            >
              Dai un voto:
            </Form.Label>
            <Form.Select
              className={margin}
              value={vote}
              onChange={(e) => setVote(e.target.value)}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={isModify && 12}>
          <Button type="submit" variant="primary" className={"m-2 "}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CommentForm;
