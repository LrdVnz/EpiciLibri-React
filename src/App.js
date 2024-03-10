import BasicFooter from "./BasicFooter";
import BasicNav from "./BasicNav";
import Main from "./Main";
import Books from "./books/fantasy.json";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <main>
      <BasicNav />
      <Container fluid>
        <Row className="g-2">
          <Main books={Books} />
        </Row>
      </Container>
      <BasicFooter />
    </main>
  );
};

export default App;
