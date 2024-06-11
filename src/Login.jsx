import { useNavigate } from "react-router-dom"; // Corrected import
import { useState } from "react";

import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  let [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name === "admin" && formData.password === "admin") {
      navigate("/DisplayCars");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="login-section">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-container">
            <label htmlFor="fname" className="labelInput">
              Name
            </label>
            <input
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
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input
            className="submit"
            name="submit"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
