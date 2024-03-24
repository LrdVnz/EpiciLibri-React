import { createContext } from "react";
import { useState } from "react";

export const SelectedContext = createContext(null);

const SelectedContextProvider = ({ children }) => {
  const [selected, setSelected] = useState("");

  const value = {
    selected, 
    setSelected,
  };

  return (
    <SelectedContext.Provider value={value}>
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedContextProvider;
