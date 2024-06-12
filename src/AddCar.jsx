import { useGlobalContext } from "./Context";
import NavigationBar from "./NavigationBar";
import React, { useState } from "react";

import "./AddCar.css";

const AddCar = () => {
  const { carModel, manufacturer, year, description, userId, addCar } =
    useGlobalContext();

  const [updateModel, setUpdateModel] = useState(carModel);
  const [updateManufacturer, setUpdateManufacturer] = useState(manufacturer);
  const [updateYear, setUpdateYear] = useState(year); // Convert to string if year is a number
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateUserId, setUpdateUserId] = useState(userId);

  const handleSubmit = (event) => {
    event.preventDefault();

    const car = {
      model: updateModel,
      manufacturer: updateManufacturer,
      year: updateYear,
      description: updateDescription,
      userId: updateUserId,
    };
    addCar(car);
  };

  return (
    <>
      <NavigationBar />
      <section className="add-car-section">
        <form className="add-car-form" onSubmit={handleSubmit}>
          <label className="add-car-label">Model:</label>
          <input
            type="text"
            value={updateModel}
            onChange={(e) => setUpdateModel(e.target.value)}
            placeholder="model"
          />
          <label className="add-car-label">Manufacturer:</label>
          <input
            type="text"
            value={updateManufacturer}
            onChange={(e) => setUpdateManufacturer(e.target.value)}
            placeholder="manufacturer"
          />
          <label className="add-car-label">Year:</label>
          <input
            type="text"
            value={updateYear}
            onChange={(e) => setUpdateYear(e.target.value)}
            placeholder="year"
          />
          <label className="add-car-label">Description:</label>
          <input
            type="text"
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
            placeholder="description"
          />
          <label className="add-car-label">User ID:</label>
          <input
            type="text"
            value={updateUserId}
            onChange={(e) => setUpdateUserId(e.target.value)}
            placeholder="userId"
          />
          <button className="button update" type="submit">
            Add
          </button>
        </form>
      </section>
    </>
  );
};

export default AddCar;
