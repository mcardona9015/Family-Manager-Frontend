import { useState } from "react";
import ListItem from "./ListItem";
import { IoTrashOutline } from "react-icons/io5";

function List({ list, removeList }) {
  const { title, list_items, id } = list;
  const [listItems, setListItems] = useState(
    list_items.sort((a, b) => a.id - b.id)
  );

  const allListItems = listItems.map((item) => {
    return (
      <ListItem
        key={item.id}
        listItem={item}
        listId={id}
        removeListItem={removeListItem}
        addListItem={addListItem}
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
    fetch(`http://localhost:3000/list/${id}`, {
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
    fetch(`http://localhost:3000/list/${id}`, {
      method: "DELETE",
    });
    removeList(list);
  }

  return (
    <div className="list-container">
      <textarea
        className="list-title"
        placeholder={"Title"}
        defaultValue={title}
        onBlur={updateListTitle}
        onKeyDown={(e) =>
          e.code === "Enter" || e.code === "Tab" ? updateListTitle(e) : null
        }
      ></textarea>
      <IoTrashOutline className="list-delete" size="20" onClick={deleteList} />
      <section className="list">
        {allListItems}
        <ListItem
          listItem={{ complete: false, content: "" }}
          listId={id}
          removeListItem={removeListItem}
          addListItem={addListItem}
        />
      </section>
    </div>
  );
}

export default List;
