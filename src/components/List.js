import { useState } from "react";
import ListItem from "./ListItem";
import { IoTrashOutline } from "react-icons/io5";
import TextareaAutosize from "react-textarea-autosize";

function List({ list, removeList }) {
  const { title, list_items, id } = list;
  const [listItems, setListItems] = useState(
    list_items
      .sort((a, b) => a.id - b.id)
      .sort((a, b) => a.complete - b.complete)
  );

  const allListItems = listItems.map((item) => {
    return (
      <ListItem
        key={item.id}
        listItem={item}
        listId={id}
        removeListItem={removeListItem}
        addListItem={addListItem}
        setListItems={setListItems}
        sortListItems={sortListItems}
      />
    );
  });

  function addListItem(item) {
    const newListItems = [...listItems];
    newListItems.push(item);
    setListItems(newListItems);
  }

  function removeListItem(item) {
    const newListItems = listItems.filter(
      (listItem) => listItem.id !== item.id
    );
    setListItems(newListItems);
  }

  function updateListTitle(e) {
    e.preventDefault();
    fetch(`https://my-family-manager.herokuapp.com/list/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list: { title: e.target.value },
      }),
    })
      .then((response) => response.json())
      .then(console.log);
  }

  function deleteList() {
    fetch(`https://my-family-manager.herokuapp.com/list/${id}`, {
      method: "DELETE",
    });
    removeList(list);
  }

  function sortListItems(item) {
    const newListItems = [...listItems];
    const listItem = listItems.find((listItem) => listItem.id === item.id);
    newListItems[listItem] = item;
    newListItems
      .sort((a, b) => a.id - b.id)
      .sort((a, b) => a.complete - b.complete);
    setListItems(newListItems);
    console.log(newListItems);
  }

  return (
    <div className="list-container">
      <TextareaAutosize
        className="list-title"
        placeholder={"Title"}
        defaultValue={title}
        onBlur={updateListTitle}
        onKeyDown={(e) =>
          e.code === "Enter" || e.code === "Tab" ? updateListTitle(e) : null
        }
      />
      <IoTrashOutline className="list-delete" size="20" onClick={deleteList} />
      <section className="list">
        {allListItems}
        <ListItem
          listItem={{ complete: false, content: "" }}
          listId={id}
          removeListItem={removeListItem}
          addListItem={addListItem}
          sortListItems={sortListItems}
        />
      </section>
    </div>
  );
}

export default List;
