import { useState } from "react";

const AddComment = () => {

  const [ comment, setComment ] = useState();

  const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";

  let requestBody = {
    comment,
    rate,
    elementId,
  };

  const uploadComment = async function () {
    const res = await fetch("");
  };

  const getComment = () => {
     
  }

  return (
    <>
      <label htmlFor="input">Aggiungi un commento..</label>
      <input type="text"  />
      <button onClick={ () => setComment(comment) }>Invia</button>
    </>
  );
};

export default AddComment;
