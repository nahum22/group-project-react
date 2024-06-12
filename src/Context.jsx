import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      toast.success("Successfully created!", {
        position: "top-center",
      });
      //  setCarsData(response.data);
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      toast.success("Successfully updated!", {
        position: "top-center",
      });
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      toast.success("Successfully deleated car!", {
        position: "top-center",
      });
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
