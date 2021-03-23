import ListItem from "./ListItem";

function List({ list }) {
  const { title, list_items, id } = list;

  const allListItems = list_items.map((item) => {
    return <ListItem key={item.id} listItem={item} listId={id} />;
  });

  return (
    <div className="list-container">
      <input className="list-title" defaultValue={title}></input>
      <section className="list">
        {allListItems}
        <ListItem listItem={{ complete: false, content: "" }} listId={id} />
      </section>
    </div>
  );
}

export default List;
