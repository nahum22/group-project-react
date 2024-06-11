import { useGlobalContext } from "./Context";
import React from "react";

import "./DisplayCars.css";
import { useNavigate } from "react-router-dom";
const DisplayCars = () => {
  const { loading, carsData, removeCar } = useGlobalContext();
  const navigate = useNavigate();
  const updatePage = (car) => {
    navigate(`/Update/${car.id}`);
  };

  return (
    <section className="display-section">
      <table className="table">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <tbody>
            <tr className="table-titles">
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Description</th>
              <th>Year</th>
            </tr>
            {carsData.map((car) => {
              return (
                <tr className="cars" key={car.userId}>
                  <td>{car.manufacturer}</td>
                  <td>{car.model}</td>
                  <td>{car.description}</td>
                  <td>{car.year}</td>
                  <td>
                    <button
                      className="button update"
                      onClick={() => updatePage(car)}
                    >
                      update
                    </button>
                  </td>
                  <td>
                    <button
                      className="button remove"
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
    </section>
  );
};

export default DisplayCars;
