import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Login.css";
import Signup from "./Signup";

function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [signup, setSignup] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // request => POST /login
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw data;
          });
        }
      })
      .then((data) => {
        // set the user in state
        setCurrentUser(data.user);
        // save the token!
        localStorage.setItem("token", data.token);
        // redirect!
        history.push("/home");
      })
      .catch((data) => {
        setErrors(data.errors);
      });
  }

  return (
    <section className="login-container">
      <section className="promo-container">
        <img
          className="logo-image"
          src="test-logo-upscaled.png"
          alt="logo"
        ></img>
      </section>
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        {errors &&
          errors.map((error) => (
            <p key={error} style={{ color: "red" }}>
              {error}
            </p>
          ))}
        <input type="submit" value="Login" />
      </form>
      <section className="signup-container">
        <h1>Signup today to start </h1>
        <button onClick={() => setSignup(true)}>Signup</button>
      </section>
      {signup ? (
        <Signup setCurrentUser={setCurrentUser} setSignup={setSignup} />
      ) : null}
    </section>
  );
}

export default Login;
