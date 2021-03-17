function Photo({ src }) {
  return (
    // <div className="photo-container">
    <img className="photo" src={src} alt="sample"></img>

    // </div>
  );
}
{
  /* <Image
cloudName={process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}
publicId="bulbasaur_image_fx8vza.webp"
  /> */
}
export default Photo;
