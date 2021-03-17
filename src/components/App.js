import "../css/App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import PhotoAlbum from "./PhotoAlbum";
import Calendar from "./Calendar";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  console.log(currentUser);

  // auto-login!
  useEffect(() => {
    // TODO: check if a user has already logged in (look for their token)
    // if they've already logged in, use that token to them in again
    const token = localStorage.getItem("token");
    if (token) {
      // request => GET /me
      // send the token with the request
      fetch("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          // response => setCurrentUser
          setCurrentUser(user);
        });
    }
  }, []);

  return (
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/photos">
          <PhotoAlbum />
        </Route>
        <Route exact path="/calendar">
          <Calendar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
