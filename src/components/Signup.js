import { useState } from "react";
import { useHistory } from "react-router";

function Signup({ setSignup, setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    profile_pic: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://my-family-manager.herokuapp.com/signup", {
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
        setCurrentUser(data.user);
        localStorage.setItem("token", data.token);
        history.push("/");
      })
      .catch((data) => {
        setErrors(data.errors);
      });
  }

  const { username, profile_pic, email, password } = formData;

  function handleClick(e) {
    if (e.target.className === "modal-background") {
      setSignup(false);
    }
  }

  return (
    <div className="modal-background" onClick={handleClick}>
      <div className="signup-form-container">
        {/* <button onClick={() => setSignup(false)}>X</button> */}
        <section className="signup-form">
          <form onSubmit={handleSubmit} autoComplete="off">
            <h1>Signup</h1>

            <input
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <br />

            {/* <input
              placeholder="Profile Picture"
              type="text"
              name="profile_pic"
              value={profile_pic}
              onChange={handleChange}
            />
            <br /> */}
            {/* <img
              src={
                profile_pic.length
                  ? profile_pic
                  : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
              }
              alt={username}
            /> */}

            <input
              placeholder="E-mail"
              name="email"
              value={email}
              type="text"
              onChange={handleChange}
            />
            <br />

            <input
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <br />

            {errors.map((error) => (
              <p key={error} style={{ color: "red" }}>
                {error}
              </p>
            ))}
            <input type="submit" value="Signup" />
          </form>
        </section>
      </div>
    </div>
  );
}

export default Signup;
