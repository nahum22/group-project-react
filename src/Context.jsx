import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const url = "https://6666aa30a2f8516ff7a44b9d.mockapi.io/cars";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [carsData, setCarsData] = useState([]);

  // Fetching the cars from mock API
  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setCarsData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // Adding car to API
  const handleAddCar = async (car) => {
    setLoading(true);
    try {
      const response = await axios.post(url, car);
    //  setCarsData(response.data);
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
      await axios.put(`${url}/${car.id}`, car);
      await fetchCars();
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
      await axios.delete(`${url}/${car.id}`);
      await fetchCars();
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
      ...car,
    };
    handleAddCar(newCar);
  };

  // Updating car, need to check
  const updateCar = (car) => {
    updateCar(car);
  };

  // Remove car
  const removeCar = (car) => {
    handleDeleteCar(car);
  };

  console.log(carsData);
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
