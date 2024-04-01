import { useState, useEffect, useContext } from "react";
import { Card, Button, Col} from "react-bootstrap";
import AddComment from "./AddComment";
import ModifyComment from "./ModifyComment";
import "./CommentForm.css";

import { SelectedContext } from "../../contexts/SelectedContextProvider";

const CommentArea = () => {
  const endpoint = "https://striveschool-api.herokuapp.com/api/books/";
  const authToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2VkYzI0ZjYwNTAwMTkzN2Q1MTciLCJpYXQiOjE3MTE5NjU4MDQsImV4cCI6MTcxMzE3NTQwNH0.JoZHy-RFfdIXrG05LxXCXOAUzNflrEJSxnpZD7pAdj8"
  
  const [comments, setComments] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [showModify, setShowModify] = useState(false);
  const [ uploaded, setUploaded ] = useState(false)
  const { selected } = useContext(SelectedContext);

  function reloadComments() {
    uploaded ? setUploaded(false) : setUploaded(true);
  }

  function handleShowModify() {
    if (showModify) {
      setShowModify(false);
    } else if (!showModify) {
      setShowModify(true);
    }
  }

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length !== 0) {
          setEmpty(false);
          setComments(json.slice(0, 200));
        } else {
          setComments([]);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (selected !== "") {
      fetch(endpoint + selected + "/comments/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.length !== 0) {
            setEmpty(false);
            setComments(json);
          } else {
            setComments([]);
          }
        })
        .catch((e) => console.log(e));
    }
  }, [selected, uploaded]);

  function handleDelete(e) {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + e, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
    }).then(() => {
      alert("comment deleted");
      reloadComments();
      setUploaded(!uploaded);
    });
  }

  return (
    <>
      {!comments && <p> loading comments ... </p>}
      {empty && <p> There are no comments. </p>}
      {comments &&
        comments.map((comment, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <span> {comment.comment} </span>
                  <span> {comment.author} </span>
                </Card.Text>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => handleDelete(comment._id)}
                >
                  Delete comment
                </Button>
                <Button
                  variant="warning"
                  className="m-2"
                  onClick={() => handleShowModify()}
                >
                  Modify comment
                </Button>
                {showModify && (
                  <ModifyComment
                    existing_comment={comment.comment}
                    id={comment._id}
                    selected={selected}
                    handleShowModify={handleShowModify}
                    reloadFather={reloadComments}
                  ></ModifyComment>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      <AddComment reloadFather={reloadComments}></AddComment>
    </>
  );
};

export default CommentArea;
