import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import AddComment from "./AddComment";
import ModifyComment from "./ModifyComment";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const CommentArea = ({ asin }) => {
  const endpoint = "https://striveschool-api.herokuapp.com/api/books/";
  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2VkYzI0ZjYwNTAwMTkzN2Q1MTciLCJpYXQiOjE3MTA2NzE0MDUsImV4cCI6MTcxMTg4MTAwNX0.Ns4BZ0gCOAnJFbUqi2dikVvL93D2ovImKA8sXcDDhWE";

  const [comments, setComments] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [showModify, setShowModify] = useState(false);

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
          setComments(json.slice(0,200));
        } else {
          setComments([]);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (asin !== "") {
      fetch(endpoint + asin + "/comments/", {
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
  }, [asin]);

  function handleDelete(e) {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + e, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
    }).then(() => {
      alert("comment deleted");
    });
  }

  return (
    <>
      
      {!comments && <p> loading comments ... </p>}
      {empty && <p> There are no comments. </p>}
      {comments &&
        comments.map((comment, index) => (
          <Col sm={12} md={6} lg={4}  >
          <Card key={index}
          style={{ width: "18rem" }}>
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
                onClick={() => {
                  if (showModify) {
                    setShowModify(false);
                  } else if (!showModify) {
                    setShowModify(true);
                  }
                }}
              >
                Modify comment
              </Button>
              {showModify && (
                <ModifyComment
                  existing_comment={comment.comment}
                  id={comment._id}
                  asin={asin}
                ></ModifyComment>
              )}
            </Card.Body>
          </Card>
      </Col>
        ))}
      <AddComment asin={asin}></AddComment>
    </>
  );
};

export default CommentArea;
