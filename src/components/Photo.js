import { Image } from "cloudinary-react";
import { useState } from "react";
import { FiStar } from "react-icons/fi";

function Photo({ photo, favoritePhoto }) {
  const { public_id, title, id, favorite } = photo;
  const [isFavorite, setIsFavorite] = useState(favorite);

  function handlePhotoClick(e) {
    console.log(photo);
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
    </div>
  );
}

export default Photo;
