import { useGlobalContext } from "./Context";
import React from "react";
import "./DisplayCars.css";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
const DisplayCars = () => {
  const { loading, carsData, removeCar } = useGlobalContext();
  const navigate = useNavigate();
  const updatePage = (car) => {
    navigate(`/Update/${car.id}`);
  };

  return (
    <>
      <NavigationBar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <tbody>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Desc</th>
              <th>Year</th>
            </tr>
            {carsData.map((car) => {
              return (
                <tr key={car.id}>
                  <td>{car.manufacturer}</td>
                  <td>{car.model}</td>
                  <td>{car.description}</td>
                  <td>{car.year}</td>
                  <td className="button">
                    <button onClick={() => updatePage(car)}>update</button>
                  </td>
                  <td className="button">
                    <button onClick={() => removeCar(car)}>remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default DisplayCars;
