import Photo from "./Photo";
import "../css/PhotoAlbum.css";
import PhotoToolBar from "./PhotoToolBar";
import { useState, useEffect } from "react";
import PhotoUpload from "./PhotoUpload";
import FullPhoto from "./FullPhoto";

function PhotoAlbum({ currentUser, photos, setPhotos }) {
  console.log("currentUser: ", currentUser);
  const [uploadPhoto, setUploadPhoto] = useState(false);

  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  function showUploadBox() {
    setUploadPhoto((uploadPhoto) => !uploadPhoto);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/photo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((userPhotos) => {
          setPhotos(userPhotos.sort((a, b) => a.id - b.id));
        });
    }
    // setPhotos(currentUser.photo_albums[0].photos);
  }, []);

  function favoritePhoto(favoritedPhoto) {
    const newPhotos = [...photos];
    const photo = photos.find((photo) => photo.id === favoritedPhoto.id);
    newPhotos[photo] = favoritedPhoto;
    setPhotos(newPhotos);
  }

  function removePhoto(deletedPhoto) {
    const newPhotos = photos.filter((photo) => photo.id !== deletedPhoto.id);
    setPhotos(newPhotos);
  }

  const photoList =
    photos &&
    photos.map((photo) => {
      return (
        <Photo
          key={photo.id}
          photo={photo}
          favoritePhoto={favoritePhoto}
          removePhoto={removePhoto}
          setShowPhoto={setShowPhoto}
          setCurrentPhoto={setCurrentPhoto}
        />
      );
    });

  return (
    <section className="photo-album-container">
      <PhotoToolBar showUploadBox={showUploadBox} />
      {uploadPhoto ? (
        <PhotoUpload
          currentUser={currentUser}
          photos={photos}
          setPhotos={setPhotos}
          setUploadPhoto={setUploadPhoto}
        />
      ) : null}

      <section className="photo-album">
        {photoList}
        {showPhoto ? (
          <FullPhoto
            photo={currentPhoto}
            favoritePhoto={favoritePhoto}
            removePhoto={removePhoto}
            setShowPhoto={setShowPhoto}
            setCurrentPhoto={setCurrentPhoto}
            showPhoto={showPhoto}
          />
        ) : null}
      </section>
    </section>
  );
}

export default PhotoAlbum;
