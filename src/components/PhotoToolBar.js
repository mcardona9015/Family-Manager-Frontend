function PhotoToolBar({ showUploadBox }) {
  return (
    <section className="photo-tool-bar">
      <button onClick={showUploadBox}>Upload Photo</button>
    </section>
  );
}

export default PhotoToolBar;
