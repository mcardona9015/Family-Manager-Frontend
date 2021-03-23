function ListItem({ listItem, listId }) {
  const { complete, content } = listItem;

  function updateList(e) {
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
      .then(console.log);
  }
  return (
    <div className="list-item">
      <input type="checkbox" defaultValue={complete} />
      <input
        className="list-item"
        defaultValue={content}
        name="content"
        onBlur={updateList}
      />
      <input type="button" value="X" />
    </div>
  );
}

export default ListItem;
