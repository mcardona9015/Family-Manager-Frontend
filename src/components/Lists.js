import List from "./List";
import "../css/Lists.css";
import ListsToolBar from "./ListsToolBar";
import { useEffect, useState } from "react";
// import NewList from "./NewList";

function Lists() {
  // const [showNewList, setShowNewList] = useState(false);
  const [lists, setLists] = useState(null);
  console.log("lists: ", lists);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://my-family-manager.herokuapp.com/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(setLists);
    }
  }, []);

  const allLists =
    lists &&
    lists.map((list) => {
      return <List key={list.id} list={list} removeList={removeList} />;
    });

  function handleNewListClick() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://my-family-manager.herokuapp.com/list", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((newList) => setLists([...lists, newList]));
    }
    // setShowNewList((showNewList) => !showNewList);
  }

  function removeList(removedList) {
    const newLists = lists.filter((list) => list.id !== removedList.id);
    setLists(newLists);
  }

  return (
    <section className="lists-container">
      <ListsToolBar handleNewListClick={handleNewListClick} />
      {/* {showNewList ? <NewList handleNewListClick={handleNewListClick} /> : null} */}
      <section className="lists">{allLists}</section>
    </section>
  );
}

export default Lists;
