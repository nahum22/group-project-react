import Login from "./Login";
import DisplayCars from "./DisplayCars";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/DisplayCars" element={<DisplayCars />} />
        </Routes>
    </Router>
  );
}

export default App;
