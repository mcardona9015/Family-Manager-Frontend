import Photo from "./Photo";
import "../css/PhotoAlbum.css";
import PhotoToolBar from "./PhotoToolBar";
import { useState, useEffect } from "react";
import PhotoUpload from "./PhotoUpload";

function PhotoAlbum({ currentUser }) {
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [photos, setPhotos] = useState(null);
  const url = "http://localhost:3000/photo";

  function showUploadBox() {
    setUploadPhoto((uploadPhoto) => !uploadPhoto);
  }

  useEffect(() => {
    setPhotos(currentUser.photo_albums[0].photos);
  }, [currentUser]);

  const photoList = photos.map((photo) => {
    return <Photo photo={photo} />;
  });

  return (
    <section className="photo-album-container">
      <PhotoToolBar showUploadBox={showUploadBox} />
      {uploadPhoto ? <PhotoUpload currentUser={currentUser} /> : null}
      <section className="photo-album">{photoList}</section>
    </section>
  );
}

export default PhotoAlbum;
