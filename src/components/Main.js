
import Row from "react-bootstrap/Row";

import SingleBook from "./SingleBook";
import { useState } from "react";

const Main = ({ books }) => {
  const [searchInput, setSearchInput] = useState("");

  let bookList = books; 

  if (searchInput !== "" ) {
    bookList = books
      .filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase()) 
      );
  }

  return (
    <>
      <div>
        <label>Search books: </label>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <p>{searchInput}</p>
      </div>
      <Row>{
      bookList.map((book, index) => (
      <SingleBook book={book} key={index} />
    ))}</Row>
    </>
  );
};

export default Main;
