import { useState, useContext } from "react";
import { SelectedContext } from "../../contexts/SelectedContextProvider";
import CommentForm from "./CommentForm";

const AddComment = ({reloadFather}) => {
  const [comment, setComment] = useState("");
  const [vote, setVote] = useState(1);
  const [isPending, setIsPending] = useState(false);
  const { selected } = useContext(SelectedContext);

  const endpoint = "https://striveschool-api.herokuapp.com/api/comments";
  const authToken =  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2VkYzI0ZjYwNTAwMTkzN2Q1MTciLCJpYXQiOjE3MTE5NjU4MDQsImV4cCI6MTcxMzE3NTQwNH0.JoZHy-RFfdIXrG05LxXCXOAUzNflrEJSxnpZD7pAdj8";

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
      isModify={false}
    />
    </>
  );
};

export default AddComment;
