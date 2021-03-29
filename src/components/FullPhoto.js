import { Image } from "cloudinary-react";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

function FullPhoto({
  photo,
  favoritePhoto,
  removePhoto,
  setShowPhoto,
  setCurrentPhoto,
  showPhoto,
}) {
  const { public_id, title, id, favorite } = photo;
  const [isFavorite, setIsFavorite] = useState(favorite);

  function handlePhotoClick(e) {
    console.log("e: ", e);
    console.log(photo);
    // setShowPhoto(true);
    // setCurrentPhoto(photo);
    // console.log("isFavorite: ", isFavorite);
  }

  function handleFavoriteClick() {
    setIsFavorite((isFavorite) => !isFavorite);
    fetch(`http://localhost:3000/photo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: !favorite }),
    })
      .then((res) => res.json())
      .then(favoritePhoto);
  }

  function deletePhoto(e) {
    // const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}/destroy/${public_id}`;
    // fetch(url, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then(console.log);

    fetch(`http://localhost:3000/photo/${id}`, {
      method: "DELETE",
    }).then(() => removePhoto(photo));
  }

  function hideModal(e) {
    if (e.target.className.includes("modal")) {
      setShowPhoto(false);
    }
  }

  return (
    <div className="modal-background" onClick={hideModal}>
      <div className="photo-show-container">
        <div
          className="full-photo-container"
          // style={{ width: "500px", height: "500px" }}
        >
          <Image
            className={showPhoto ? "full-photo open" : "full-photo"}
            cloudName={process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}
            publicId={public_id}
            alt={title}
            onClick={handlePhotoClick}
          ></Image>
          <FiStar
            size={20}
            className="favorite-star"
            onClick={handleFavoriteClick}
            fill={isFavorite ? "gold" : "none"}
            color="gold"
          />
          <IoTrashOutline
            className="photo-delete"
            size="20"
            onClick={deletePhoto}
            color="red"
          />
        </div>
      </div>
    </div>
  );
}

export default FullPhoto;
