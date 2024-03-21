import { useState } from "react";
import { Button } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState("");
  const [vote, setVote] = useState(1);
  const [isPending, setIsPending] = useState(false);

  const endpoint = "https://striveschool-api.herokuapp.com/api/comments";
  const authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2VkYzI0ZjYwNTAwMTkzN2Q1MTciLCJpYXQiOjE3MTA2NzE0MDUsImV4cCI6MTcxMTg4MTAwNX0.Ns4BZ0gCOAnJFbUqi2dikVvL93D2ovImKA8sXcDDhWE"

  async function handleSubmit(e) {
    e.preventDefault();

    setIsPending(true);
    
    const requestBody = {
      comment:comment,
      rate:vote,
      elementId: asin
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
    } catch (e) {
      console.log(e);
      setIsPending(false)
    }
  }
  return (
    <>
      <form 
      className="p-2"
      onSubmit={handleSubmit}>
        <label>Aggiungi un commento:</label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <label> Dai un voto:</label>
        <select value={vote} onChange={(e) => setVote(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <Button 
        variant="primary"
        className="m-2"
        >Submit</Button>
      </form>
    </>
  );
};

export default AddComment;
