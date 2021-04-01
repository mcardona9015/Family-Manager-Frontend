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
  const [sortByFavorites, setSortByFavorites] = useState(false);

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
  }, [setPhotos]);

  function favoritePhoto(favoritedPhoto) {
    const newPhotos = [...photos];
    const photo = newPhotos.find((photo) => photo.id === favoritedPhoto.id);
    console.log("photo: ", photo);
    newPhotos[photo] = favoritedPhoto;
    // newPhotos[photo].favorite = !favoritedPhoto.favorite;
    setPhotos(newPhotos);
  }

  function removePhoto(deletedPhoto) {
    const newPhotos = photos.filter((photo) => photo.id !== deletedPhoto.id);
    setPhotos(newPhotos);
  }

  const sortedPhotos =
    photos &&
    photos.filter((photo) => {
      if (sortByFavorites) {
        return photo.favorite;
      } else {
        return true;
      }
    });

  const photoList =
    photos &&
    sortedPhotos.map((photo) => {
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

  function sortFavorites() {
    setSortByFavorites((favorite) => !favorite);
    // const sortedPhotos = [...photos].filter((photo) => photo.favorite);
    // setPhotos(sortedPhotos);
    console.log("sorted", sortedPhotos);
  }

  return (
    <section className="photo-album-container">
      <PhotoToolBar
        showUploadBox={showUploadBox}
        sortFavorites={sortFavorites}
      />
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
