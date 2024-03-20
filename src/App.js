/// Import di react
import { useState, useEffect, useContext  } from "react";
import { ThemeContext } from "./contexts/ThemeContextProvider";

/// Import di bootstrap
import BasicFooter from "./components/BasicFooter";
import BasicNav from "./components/BasicNav";
import Main from "./components/Main";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

/// Import per i libri in json.
import fantasy from "./books/fantasy.json";
import historyBooks from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const {theme, setTheme} = useContext(ThemeContext);

  const categories = {
    fantasy: fantasy,
    historyBooks: historyBooks,
    horror: horror,
    romance: romance,
    scifi: scifi,
  };

  const [books, setBooks] = useState(fantasy);
  const [loading, setLoading] = useState(false);

  let bookList = books;

  if (searchInput !== "") {
    bookList = books.filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  const handleDropdown = (category) => {
    setLoading(true);
    setBooks(categories[category]);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <main>
        <BasicNav
          handleDropdown={handleDropdown}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />
        <Container className={`bg-${theme}`} fluid  >
          {loading && <p> loading..</p>}
          <Row className="g-2">
            <Main books={bookList} />
          </Row>
        </Container>
        <BasicFooter />
    </main>
  );
};

export default App;


/*
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dar k");

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
*/