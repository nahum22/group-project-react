import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
const url = "https://6666aa30a2f8516ff7a44b9d.mockapi.io/cars";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carsData, setCarsData] = useState([]);


  // Fetching the cars from mock API
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


  // Adding car to API
  const handleAddCar = async (car) => {
    setLoading(true);
    try {
      const response = await axios.post(`${url}/${car.id}`, car);
      setCarsData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  // Update car to API
  const handleUpdateCar = async (car) => {
    setLoading(true);
    try {
      const response = await axios.put(`${url}/${car.id}`, car);
      setCarsData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  // Delete car to API
  const handleDeleteCar = async (car) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${url}/${car.id}`);
      setCarsData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  // Create ID for car based on last ID
  const createCarId = () => {
    const carIds = carsData.map((car) => car.id);
    carIds.sort((a, b) => a - b);
    const lastId = parseInt(carIds[carIds.length - 1]);
    return lastId + 1;
  };

  
  // Adding a new car to the data
  const addCar = (car) => {
    const newCar = {
      id: createCarId(),
      model: car.model,
      manufacturer: car.manufacturer,
      year: car.year,
      userId: car.userId,
      description: car.description,
    };
    setCarsData(...carsData, newCar);
  };

  // Updating car, need to check- not sure working
  const updateCar = (id) => {
    setCarsData(carsData.map((car) => (car.id === id ? { id, ...car } : car)));
  };

  // Remove car
  const removeCar = (id) => {
    setCarsData(carsData.filter((car) => car.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        carsData,
        error,
        loading,
        addCar,
        updateCar,
        removeCar,
        handleAddCar,
        handleUpdateCar,
        handleDeleteCar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
