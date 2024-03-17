import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const endpoint = "https://striveschool-api.herokuapp.com/api/books/";

  const [comments, setComments] = useState();
  const [empty, setEmpty] = useState(true)

  useEffect(() => {
    fetch(endpoint + asin + "/comments/")
      .then((res) => res.json())
      .then((json) => {
        if(json.length !== 0 ){
          setEmpty(false)
          setComments(json)
        } else {
          setComments([])
        }
      })
      .catch((e) => console.log(e));
  }, [asin]);

  return (
    <>
      { !comments && <p> loading comments ... </p>}
      { empty && <p> There are no comments. </p>}
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
        <AddComment asin={asin}></AddComment>
    </>
  );
};

export default CommentArea;
