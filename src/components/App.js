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
import Lists from "./Lists";

function App() {
  // const dispatch = useDispatch();
  // const currentUser = useSelector((storeState) => storeState.currentUser);
  const [currentUser, setCurrentUser] = useState(null);
  const [lists, setLists] = useState(null);
  const [photos, setPhotos] = useState(null);

  console.log(currentUser);

  // auto-login!
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
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
              <Home
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                lists={lists}
              />
            </Route>
            <Route exact path="/photos">
              <PhotoAlbum
                currentUser={currentUser}
                photos={photos}
                setPhotos={setPhotos}
              />
            </Route>
            <Route exact path="/calendar">
              <Calendar />
            </Route>
            <Route exact path="/lists">
              <Lists lists={lists} setLists={setLists} />
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
