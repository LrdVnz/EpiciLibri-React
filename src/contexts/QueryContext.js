import { createContext } from "react";
import { useState } from "react";
import fantasy from "../booksData/fantasy.json";

export const QueryContext = createContext(null);

const QueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState(fantasy);

  const value = {
    query,
    setQuery
  };

  return (
    <QueryContext.Provider value={value}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContextProvider;
