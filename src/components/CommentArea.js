import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const CommentArea = ({ asin }) => {
  const endpoint = "https://striveschool-api.herokuapp.com/api/books/";

  const [comments, setComments] = useState();

  useEffect(() => {
    fetch(endpoint + asin + "/comments/")
      .then((res) => res.json())
      .then((json) => setComments(json))
      .catch((e) => console.log(e));
  }, [asin]);

  return (
    <>
      {comments &&
        comments.map((comment, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Text>
                <span> {comment.comment} </span>
                <span> {comment.author} </span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default CommentArea;
