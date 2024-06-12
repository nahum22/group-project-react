import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";

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
      <form onSubmit={handleSubmit}>
        <div className="headerAddCars">Add car</div>
        <label>
          Model:
          <input
            type="text"
            value={updateModel}
            onChange={(e) => setUpdateModel(e.target.value)}
            placeholder="model"
          />
        </label>
        <label>
          Manufacturer:
          <input
            type="text"
            value={updateManufacturer}
            onChange={(e) => setUpdateManufacturer(e.target.value)}
            placeholder="manufacturer"
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            value={updateYear}
            onChange={(e) => setUpdateYear(e.target.value)}
            placeholder="year"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
            placeholder="description"
          />
        </label>
        <label>
          User ID:
          <input
            type="text"
            value={updateUserId}
            onChange={(e) => setUpdateUserId(e.target.value)}
            placeholder="userId"
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddCar;
