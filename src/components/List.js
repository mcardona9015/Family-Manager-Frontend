import ListItem from "./ListItem";

function List() {
  return (
    <div className="list-container">
      <header className="list-title">Title</header>
      <ul className="list">
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}

export default List;
