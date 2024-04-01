import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import ThemeContextProvider from "./contexts/ThemeContextProvider";
import QueryContextProvider from "./contexts/QueryContext";
import SelectedContextProvider from "./contexts/SelectedContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedContextProvider>
      <QueryContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </QueryContextProvider>
    </SelectedContextProvider>
  </React.StrictMode>
);
