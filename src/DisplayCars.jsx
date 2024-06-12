import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Context";
import NavigationBar from "./NavigationBar";
import "./DisplayCars.css";

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
          <thead className="table-head">
            <tr className="table-titles">
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Desc</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="cars">
            {carsData.map((car) => (
              <tr key={car.id}>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
                <td>{car.description}</td>
                <td>{car.year}</td>
                <td className="buttons">
                  <button
                    className="button update"
                    onClick={() => updatePage(car)}
                  >
                    Update
                  </button>
                  <button
                    className="button remove"
                    onClick={() => removeCar(car)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default DisplayCars;
