import DisplayCars from "./DisplayCars";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

import "./App.css";
import Update from "./Update";
import AddCar from "./AddCar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/DisplayCars" element={<DisplayCars />} />
        <Route path="/Update/:CarId" element={<Update />} />
        <Route path="/addCar" element={<AddCar />} />
        <></>
      </Routes>
    </Router>
  );
}

export default App;
