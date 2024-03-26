import { useState, useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContextProvider";
import { BasicFooter, BasicNav, Main, Container, fantasy, historyBooks, horror, romance, scifi, } from "./components/Importer";

const categories = {
  fantasy: fantasy,
  historyBooks: historyBooks,
  horror: horror,
  romance: romance,
  scifi: scifi,
};

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const { theme } = useContext(ThemeContext);
  
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

  const loadingMsg = 
  <p className={theme === "dark" ? "text-light" : "text-dark"}>
    loading..
  </p>

  return (
    <main>
      <BasicNav handleDropdown={handleDropdown} setSearchInput={setSearchInput} 
      searchInput={searchInput} />
      <Container className={`bg-${theme}`} fluid>
        {loading && loadingMsg}
        <Main books={bookList} />
      </Container>
      <BasicFooter />
    </main>
  );
};

export default App;
