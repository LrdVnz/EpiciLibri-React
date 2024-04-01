import { useState, useContext } from "react";

import { Col, Row, Container } from "react-bootstrap";
import BasicFooter from "./BasicFooter";
import BasicNav from "./BasicNav";
import SingleBook from "./books/SingleBook";
import CommentArea from "./comments/CommentArea";

/// Import per i libri in json.
import fantasy from "../booksData/fantasy.json";
import historyBooks from "../booksData/history.json";
import horror from "../booksData/horror.json";
import romance from "../booksData/romance.json";
import scifi from "../booksData/scifi.json";

import { ThemeContext } from "../contexts/ThemeContextProvider";
import { QueryContext } from "../contexts/QueryContext";
import SelectedContextProvider from "../contexts/SelectedContextProvider";

const categories = {
  fantasy: fantasy,
  historyBooks: historyBooks,
  horror: horror,
  romance: romance,
  scifi: scifi,
};

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { theme } = useContext(ThemeContext);
  const { query, setQuery } = useContext(QueryContext);

  const showSearch = true;

  const loadingMsg = (
    <p className={theme === "dark" ? "text-light" : "text-dark"}>loading..</p>
  );

  const handleDropdown = (category) => {
    setLoading(true);
    setQuery(categories[category]);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  let bookList = query;

  if (searchInput !== "") {
    bookList = query.filter((book) => {
      if (book.title.toLowerCase().includes(searchInput.toLowerCase())) {
        return book;
      }
    });
  }

  return (
    <>
      <BasicNav
        handleDropdown={handleDropdown}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        showSearch={showSearch}
      />
      
        <Container className={`bg-${theme}`} fluid>
          {loading && loadingMsg}
          <Row className="gy-3">
            <Col md={6}>
              <Row className="gy-3">
                {bookList.map((book, index) => (
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
        </Container>
      <BasicFooter />
    </>
  );
};

export default Main;
