import List from "./List";
import "../css/Lists.css";
import ListsToolBar from "./ListsToolBar";
import { useState } from "react";
import NewList from "./NewList";

function Lists() {
  const [showNewList, setShowNewList] = useState(false);
  function handleNewListClick() {
    setShowNewList((showNewList) => !showNewList);
  }

  return (
    <section className="lists-container">
      <ListsToolBar handleNewListClick={handleNewListClick} />
      {showNewList ? <NewList handleNewListClick={handleNewListClick} /> : null}
      <section className="lists">
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </section>
    </section>
  );
}

export default Lists;
