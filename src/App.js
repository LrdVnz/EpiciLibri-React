/// Import di react
import { useState, useEffect } from "react";

/// Import di bootstrap
import BasicFooter from "./components/BasicFooter";
import BasicNav from "./components/BasicNav";
import Main from "./components/Main";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Title from "./components/Title";

/// Import per i libri in json.
import fantasy from "./books/fantasy.json";
import historyBooks from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

const App = () => {
  const categories = {
    fantasy: fantasy,
    historyBooks: historyBooks,
    horror: horror,
    romance: romance,
    scifi: scifi,
  };

  const [books, setBooks] = useState(fantasy);
  const [loading, setLoading] = useState(false);

  const handleDropdown = (category) => {
    setLoading(true);
    setBooks(categories[category]);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <main>
      <BasicNav handleDropdown={handleDropdown} />
      <Container fluid>
        <Title />
        {loading && <p> loading..</p>}
        <Row className="g-2">
          <Main books={books} />
        </Row>
      </Container>
      <BasicFooter />
    </main>
  );
};

export default App;
