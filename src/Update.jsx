import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Update = () => {
  const { CarId } = useParams();
  const { handleUpdateCar, carsData } = useGlobalContext();
  let car = carsData.filter((item) => item.id == CarId);
  car = car[0];
  const [updateModel, setUpdateModel] = useState(car.model);
  const [updateManufacturer, setUpdateManufacturer] = useState(
    car.manufacturer
  );
  const [updateYear, setUpdateYear] = useState(car.year); // Convert to string if year is a number
  const [updateDescription, setUpdateDescription] = useState(car.description);
  const [updateUserId, setUpdateUserId] = useState(car.userId);

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
      <NavigationBar />
      <form onSubmit={handleSubmit}>
        <div>Update</div>
        <label>
          Model:
          <input
            type="text"
            value={updateModel}
            onChange={(e) => setUpdateModel(e.target.value)}
            placeholder={car.model}
          />
        </label>
        <label>
          Manufacturer:
          <input
            type="text"
            value={updateManufacturer}
            onChange={(e) => setUpdateManufacturer(e.target.value)}
            placeholder={car.manufacturer}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            value={updateYear}
            onChange={(e) => setUpdateYear(e.target.value)}
            placeholder={car.year}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
            placeholder={car.description}
          />
        </label>
        <label>
          User ID:
          <input
            type="text"
            value={updateUserId}
            onChange={(e) => setUpdateUserId(e.target.value)}
            placeholder={car.userId}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Update;
