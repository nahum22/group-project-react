import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { useParams } from "react-router-dom";

const Update = () => {
  const { CarId } = useParams();
  const { carModel, manufacturer, year, description, userId, handleUpdateCar } =
    useGlobalContext();

  const [updateModel, setUpdateModel] = useState(carModel);
  const [updateManufacturer, setUpdateManufacturer] = useState(manufacturer);
  const [updateYear, setUpdateYear] = useState(year); // Convert to string if year is a number
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateUserId, setUpdateUserId] = useState(userId);

  const handleSubmit = (event) => {
    event.preventDefault();

    const car = {
      id: CarId,
      model: updateModel,
      manufacturer: updateManufacturer,
      year: updateYear,
      description: updateDescription,
      userId: updateUserId,
    };
    handleUpdateCar(car);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>Update</div>
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
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Update;
