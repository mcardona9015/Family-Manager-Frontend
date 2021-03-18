import "../css/App.css";
import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setCurrentUser } from "../redux/CurrentUserSlice";
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import PhotoAlbum from "./PhotoAlbum";
import Calendar from "./Calendar";
import Login from "./Login";
import Home from "./Home";

function App() {
  // const dispatch = useDispatch();
  // const currentUser = useSelector((storeState) => storeState.currentUser);
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
          // dispatch({ type: "currentUser/setCurrentUser", payload: user });
          // dispatch(setCurrentUser(user));
          // console.log(currentUser);

          setCurrentUser(user);
        });
    }
  }, []);

  return (
    <div className="App">
      {/* <Navbar setCurrentUser={setCurrentUser} /> */}
      <Switch>
        <Route exact path="/">
          {currentUser ? (
            <Redirect to="/home" />
          ) : (
            <Login setCurrentUser={setCurrentUser} />
          )}
        </Route>
        {currentUser ? (
          <>
            <Navbar setCurrentUser={setCurrentUser} />
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/photos">
              <PhotoAlbum currentUser={currentUser} />
            </Route>
            <Route exact path="/calendar">
              <Calendar />
            </Route>
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </div>
  );
}

export default App;
