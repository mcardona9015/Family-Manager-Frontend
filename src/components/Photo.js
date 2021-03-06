import { Image } from "cloudinary-react";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

function Photo({
  photo,
  favoritePhoto,
  removePhoto,
  setShowPhoto,
  setCurrentPhoto,
}) {
  const { public_id, title, id, favorite } = photo;
  const [isFavorite, setIsFavorite] = useState(favorite);

  function handlePhotoClick(e) {
    console.log("e: ", e);
    console.log(photo);
    setShowPhoto(true);
    setCurrentPhoto(photo);
  }

  function handleFavoriteClick() {
    // favoritePhoto(photo);
    setIsFavorite((isFavorite) => !isFavorite);
    fetch(`https://my-family-manager.herokuapp.com/photo/${id}`, {
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

    fetch(`https://my-family-manager.herokuapp.com/photo/${id}`, {
      method: "DELETE",
    }).then(() => removePhoto(photo));
  }

  return (
    <div className="photo-container">
      <Image
        className="photo"
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
      />
      <IoTrashOutline
        className="photo-delete"
        size="20"
        onClick={deletePhoto}
      />
    </div>
  );
}

export default Photo;
