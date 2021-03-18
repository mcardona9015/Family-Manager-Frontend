import { Image } from "cloudinary-react";

function Photo({ photo }) {
  const { public_id, title } = photo;
  return (
    // <div className="photo-container">
    <Image
      className="photo"
      cloudName={process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}
      publicId={public_id}
      alt={title}
    ></Image>

    // </div>
  );
}

export default Photo;
