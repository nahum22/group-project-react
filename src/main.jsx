import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Context.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* Define other routes here */}
          </Routes>
        </App>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
