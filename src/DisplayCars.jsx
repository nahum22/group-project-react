import React from "react";
import { useGlobalContext } from "./Context";

const DisplayCars = () => {
  // const {} = useGlobalContext();

  const data = [
    { model: "w3434", manufacturer: "audi", description: "eerer", userId: "3s2" },
    { model: "w3434", manufacturer: "audi", description: "ererere", userId: "3s" },
  ];

  return (
    <table>
      <tbody>
        <tr>
          <th>Model</th>
          <th>Description</th>
        </tr>

        {data.map((item) => {
          return (
            <tr key={item.userId}>
              <td>{item.model}</td>
              <td>{item.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayCars;
