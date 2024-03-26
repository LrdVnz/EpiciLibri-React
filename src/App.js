
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Main from "./components/Main";

const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
