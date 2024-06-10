import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Corrected import
import { useEffect } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  let [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  //å=const navigate = useNavigate(); // Moved to the correct place

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name === "admin" && formData.password === "admin") {
      navigate("/DisplayCars");

      // navigate("/DisplayCars"); // Uncomment this line if needed
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="fname" className="labelInput">
            Name
          </label>
          <input
            className="labelInput"
            type="text"
            id="fname"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="password" className="labelInput">
            Password
          </label>
          <input
            className="name"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input name="submit" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
