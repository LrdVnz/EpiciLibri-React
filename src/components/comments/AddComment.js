import { useState, useContext } from "react";
import { SelectedContext } from "../../contexts/SelectedContextProvider";
import CommentForm from "./CommentForm";

const AddComment = ({reloadFather}) => {
  const [comment, setComment] = useState("");
  const [vote, setVote] = useState(1);
  const [isPending, setIsPending] = useState(false);
  const { selected, setSelected } = useContext(SelectedContext);

  const endpoint = "https://striveschool-api.herokuapp.com/api/comments";
  const authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2VkYzI0ZjYwNTAwMTkzN2Q1MTciLCJpYXQiOjE3MTA2NzE0MDUsImV4cCI6MTcxMTg4MTAwNX0.Ns4BZ0gCOAnJFbUqi2dikVvL93D2ovImKA8sXcDDhWE"

  async function handleSubmit(e) {
    e.preventDefault();

    setIsPending(true);
    
    const requestBody = {
      comment:comment,
      rate:vote,
      elementId: selected
    };

    console.log(requestBody)

    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : authToken,
        },
        body: JSON.stringify(requestBody),
      });
      reloadFather()
    } catch (e) {
      console.log(e);
      setIsPending(false)
    }
  }

  return (
    <>
       <CommentForm
      title={"Aggiungi commento"}
      handleSubmit={handleSubmit}
      comment={comment}
      setComment={setComment}
      setVote={setVote}
      vote={vote}
      reloadFather={reloadFather}
    />
    </>
  );
};

export default AddComment;
