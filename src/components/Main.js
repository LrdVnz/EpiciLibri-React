import { useState, useContext } from "react";

import {Col, Row} from "react-bootstrap";
import BasicFooter from "./BasicFooter";
import BasicNav from "./BasicNav";
import Container from "react-bootstrap/Container";
import SingleBook from "./books/SingleBook";
import CommentArea from "./comments/CommentArea";

/// Import per i libri in json.
import fantasy from "../booksData/fantasy.json";
import historyBooks from "../booksData/history.json";
import horror from "../booksData/horror.json";
import romance from "../booksData/romance.json";
import scifi from "../booksData/scifi.json";

import SelectedContextProvider from "../contexts/SelectedContextProvider";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const categories = {
  fantasy: fantasy,
  historyBooks: historyBooks,
  horror: horror,
  romance: romance,
  scifi: scifi,
};

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState(fantasy);

  const [loading, setLoading] = useState(false);

  const { theme } = useContext(ThemeContext);
  
  const loadingMsg = (
    <p className={theme === "dark" ? "text-light" : "text-dark"}>loading..</p>
  );

  const handleDropdown = (category) => {
    setLoading(true);
    setBooks(categories[category]);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };


  let bookList = books;

  if (searchInput !== "") {
    bookList = books.filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  return (
    <>
      <BasicNav
        handleDropdown={handleDropdown}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <Container className={`bg-${theme}`} fluid>
        {loading && loadingMsg}
        <SelectedContextProvider>
          <Row className="gy-3">
            <Col md={6}>
              <Row className="gy-3">
                {books.map((book, index) => (
                  <SingleBook book={book} key={index} />
                ))}
              </Row>
            </Col>
            <Col md={6}>
              <Row className="gy-3">
                <CommentArea asin={""} />
              </Row>
            </Col>
          </Row>
        </SelectedContextProvider>
      </Container>
      <BasicFooter />
    </>
  );
};

export default Main;
