import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
const url = "https://6666aa30a2f8516ff7a44b9d.mockapi.io/cars";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(url);
        setCarsData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [url]);



  //todo: create, read, update

  //we need to put thier names in the value

  return (
    <AppContext.Provider value={{ carsData, error, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
