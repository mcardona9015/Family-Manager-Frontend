import { TiPlusOutline } from "react-icons/ti";
import { FiStar } from "react-icons/fi";

function PhotoToolBar({ showUploadBox, sortFavorites }) {
  return (
    <section className="photo-tool-bar">
      <button className="upload-button" onClick={showUploadBox}>
        <TiPlusOutline size={50} />
      </button>
      <button onClick={sortFavorites} className="favorites-button">
        <FiStar size={50} fill="gold" />
      </button>
    </section>
  );
}

export default PhotoToolBar;
