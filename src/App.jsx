import DisplayCars from "./DisplayCars";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

import "./App.css";
import Update from "./Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/DisplayCars" element={<DisplayCars />} />
        <Route path="/Update/:CarId" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
