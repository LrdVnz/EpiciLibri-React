import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import AddComment from "./AddComment";
import ModifyComment from "./ModifyComment";
import "./CommentForm.css";

import { SelectedContext } from "../../contexts/SelectedContextProvider";

const CommentArea = ({ isDetails }) => {
  const endpoint = "https://striveschool-api.herokuapp.com/api/books/";
  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2VkYzI0ZjYwNTAwMTkzN2Q1MTciLCJpYXQiOjE3MTE5NjU4MDQsImV4cCI6MTcxMzE3NTQwNH0.JoZHy-RFfdIXrG05LxXCXOAUzNflrEJSxnpZD7pAdj8";

  const [comments, setComments] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [showModify, setShowModify] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [currentComment, setCurrentComment] = useState();
  const { selected , setSelected} = useContext(SelectedContext);
  const { asin } = useParams();

  let voteSum = 0; 

  useEffect(() => {
  let initial = 0;
  voteSum = comments.reduce((acc, value) => acc + value.rate, initial)

  console.log(voteSum)
  }, [comments])
 
  useEffect(() => {
    if(selected === "" && asin === ""){
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
    } else if (selected === "" && asin != "" ){
      setSelected(asin)
    }
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

  function reloadComments() {
    uploaded ? setUploaded(false) : setUploaded(true);
  }

  function handleShowModify(index) {
    if (showModify) {
      setShowModify(false);
    } else if (!showModify) {
      setCurrentComment(index)
      setShowModify(true);
    }
  }

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
          <Col
            sm={12}
            md={isDetails ? null : 6}
            lg={isDetails ? null : 4}
            key={index}
          >
            <Card
              style={{
                width: isDetails ? "50% " : "18rem",
                margin: isDetails ? "auto" : null,
                marginBottom: isDetails ? "10px" : null,
                marginTop: isDetails ? "10px" : null,
              }}
            >
              <Card.Body>
                <Card.Text>
                  {comment.comment}
                  <br />
                  <span>Author : </span>
                  <span>
                    <b>{comment.author}</b>
                  </span>
                  <br />
                  <span>Vote : </span>
                  <span>
                    <b>{comment.rate}</b>
                  </span>
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
                  onClick={() => handleShowModify(index)}
                >
                  Modify comment
                </Button>
                {(showModify && currentComment === index) && (
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
