import { TiPlusOutline } from "react-icons/ti";

function PhotoToolBar({ showUploadBox }) {
  return (
    <section className="photo-tool-bar">
      <button className="upload-button" onClick={showUploadBox}>
        <TiPlusOutline size={50} />
      </button>
    </section>
  );
}

export default PhotoToolBar;
