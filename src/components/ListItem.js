import { useState } from "react";

function ListItem({ listItem, listId, removeListItem, addListItem }) {
  const { complete, content, id } = listItem;
  const [listItemValue, setListItemValue] = useState(content);

  function newListItem(e) {
    if (e.target.value) {
      fetch("http://localhost:3000/listItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          list: { list_id: listId, content: e.target.value },
        }),
      })
        .then((response) => response.json())
        .then(addListItem);
      setListItemValue("");
    }
  }

  function updateListItem(e) {
    fetch(`http://localhost:3000/listItem/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list: { content: e.target.value },
      }),
    })
      .then((response) => response.json())
      .then(console.log);
  }

  function deleteListItem() {
    fetch(`http://localhost:3000/listItem/${id}`, {
      method: "DELETE",
    });
    removeListItem(listItem);
  }

  return (
    <div className="list-item">
      <input type="checkbox" defaultValue={complete} />
      <input
        className="list-item"
        value={listItemValue}
        placeholder={"List item"}
        name="content"
        onChange={(e) => setListItemValue(e.target.value)}
        onBlur={id ? updateListItem : newListItem}
        // onKeyDown={console.log}
        onKeyDown={(e) =>
          e.code === "Enter" || e.code === "Tab"
            ? id
              ? updateListItem(e)
              : newListItem(e)
            : null
        }
        // onClick={newListItem}
      />
      <input type="button" value="X" onClick={id ? deleteListItem : null} />
    </div>
  );
}

export default ListItem;
