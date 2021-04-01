import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import TextareaAutosize from "react-textarea-autosize";

function ListItem({
  listItem,
  listId,
  removeListItem,
  addListItem,
  sortListItems,
}) {
  const { complete, content, id } = listItem;
  const [listItemValue, setListItemValue] = useState(content);
  const [checked, setChecked] = useState(complete);

  function newListItem(e) {
    e.preventDefault();
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
    e.preventDefault();
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

  function onCheck(e) {
    console.log(e.target.checked);
    if (id) {
      setChecked((checked) => !checked);
      fetch(`http://localhost:3000/listItem/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          list: { complete: e.target.checked },
        }),
      })
        .then((response) => response.json())
        .then(sortListItems);
    }
  }

  return (
    <div className="list-item">
      <input
        onChange={onCheck}
        type="checkbox"
        checked={checked}
        className="checkbox"
      />

      <TextareaAutosize
        wrap="soft"
        // rows="5"
        // cols="15"
        className={checked ? "list-item-content checked" : "list-item-content"}
        value={listItemValue}
        placeholder={"List item"}
        name="content"
        onChange={(e) => setListItemValue(e.target.value)}
        onBlur={id ? updateListItem : newListItem}
        // onKeyDown={console.log}
        onKeyDown={(e) =>
          (e.code === "Enter" && !e.shiftKey) || e.code === "Tab"
            ? id
              ? updateListItem(e)
              : newListItem(e)
            : null
        }
        // onClick={newListItem}
      />
      <IoTrashOutline
        value="X"
        className="list-item-delete"
        onClick={id ? deleteListItem : null}
      />
    </div>
  );
}

export default ListItem;
