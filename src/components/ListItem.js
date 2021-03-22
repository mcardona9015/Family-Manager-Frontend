function ListItem() {
  return (
    <input
      className="list-item"
      defaultValue="List Item"
      onBlur={() => {
        console.log("hello");
      }}
    ></input>
  );
}

export default ListItem;
