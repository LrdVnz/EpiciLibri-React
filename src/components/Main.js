
import Row from "react-bootstrap/Row";

import SingleBook from "./SingleBook";
import { useState } from "react";


const Main = ({ books }) => {
 
  return (
    <>
      <Row>{
      books.map((book, index) => (
      <SingleBook book={book} key={index} />
    ))}</Row>
    </>
  );
};

export default Main;
