
import { createContext, useState, useContext } from "react";

const AppContext = createContext();
const url="https://6666aa30a2f8516ff7a44b9d.mockapi.io/cars"
export const AppProvider = ({ children }) => {
  //define usestate here

  //todo: create, read, update

  //we need to put thier names in the value

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
