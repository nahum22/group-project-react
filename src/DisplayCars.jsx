import { useGlobalContext } from "./Context";
import React from "react";

import "./DisplayCars.css";

const DisplayCars = () => {
  const { carsData, error, loading, addCar, removeCar } = useGlobalContext();

  return (
    <table className="table">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <tbody>
          <tr>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Desc</th>
            <th>Year</th>
          </tr>
          {carsData.map((car) => {
            return (
              <tr key={car.userId}>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
                <td>{car.description}</td>
                <td>{car.year}</td>
                <td className="button">
                  <button>update</button>
                </td>
                <td className="button">
                  <button
                    onClick={() => {
                      removeCar(car);
                    }}
                  >
                    remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default DisplayCars;
