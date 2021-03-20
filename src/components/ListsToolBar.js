import { TiPlusOutline } from "react-icons/ti";

function ListsToolBar({ handleNewListClick }) {
  return (
    <section className="lists-tool-bar">
      <button onClick={handleNewListClick} className="upload-button">
        <TiPlusOutline size={50} />
      </button>
    </section>
  );
}

export default ListsToolBar;
