import { useState } from "react";
import CommentForm from "./CommentForm";

const ModifyComment = ({
  existing_comment,
  id,
  asin,
  reloadFather,
  handleShowModify,
}) => {
  const [comment, setComment] = useState(existing_comment);
  const [vote, setVote] = useState(0);

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2VkYzI0ZjYwNTAwMTkzN2Q1MTciLCJpYXQiOjE3MTA2NzE0MDUsImV4cCI6MTcxMTg4MTAwNX0.Ns4BZ0gCOAnJFbUqi2dikVvL93D2ovImKA8sXcDDhWE";
  const commentsApi = "https://striveschool-api.herokuapp.com/api/comments/";

  async function handleSubmit(e) {
    e.preventDefault();
    
    console.log("ciao")

    const requestBody = {
      _id: id,
      comment: comment,
      rate: vote,
      elementId: asin,
    };

    console.log(requestBody);

    try {
      await fetch(commentsApi + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify(requestBody),
      });
      reloadFather()
      handleShowModify();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CommentForm
      title={"Modifica Commento"}
      handleSubmit={handleSubmit}
      comment={comment}
      setComment={setComment}
      setVote={setVote}
      vote={vote}
      reloadFather={reloadFather}
    />
  );
};

export default ModifyComment;
