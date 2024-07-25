// /context/Context.js
"use client"
import React, { createContext, useContext, useState } from "react";

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <GlobalContext.Provider value={{ login, setLogin }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Export the context
export default GlobalProvider;
