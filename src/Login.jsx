import React from "react";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle form submission logic here
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
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            id="fname"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
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
