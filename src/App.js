
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import BookDetails from "./components/books/BookDetails";
import Main from "./components/Main";

const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
