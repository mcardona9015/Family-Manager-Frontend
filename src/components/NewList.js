import List from "./List";

function NewList({ handleNewListClick }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button onClick={handleNewListClick}>X</button>
        <List />
      </div>
    </div>
  );
}

export default NewList;
