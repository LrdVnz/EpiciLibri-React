import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Container } from "react-bootstrap";

import BasicNav from "./BasicNav";
import BasicFooter from "./BasicFooter";

const NotFound = () => {
  const { theme } = useContext(ThemeContext);

  const showSearch = false;

  return (
    <>
      <BasicNav showSearch={showSearch} />
      <Container className={`bg-${theme}`} fluid>
        <div style={{ color: "red", fontSize: "3rem", height:"90vh" }}>
          404 Page Not found!!
        </div>
      </Container>
      <BasicFooter />
    </>
  );
};

export default NotFound;
