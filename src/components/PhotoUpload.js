import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function PhotoUpload({ currentUser, setPhotos, photos, setUploadPhoto }) {
  console.log(
    "REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME: ",
    process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME
  );

  const onDrop = useCallback(
    (acceptedFiles) => {
      const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

      acceptedFiles.forEach(async (acceptedFile) => {
        const formData = new FormData();
        formData.append("file", acceptedFile);
        formData.append(
          "upload_preset",
          process.env.REACT_APP_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );

        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log("data: ", data);

        const newPhoto = await {
          photo_album_id: currentUser.id,
          title: data.original_filename,
          favorite: false,
          url: data.url,
          public_id: data.public_id,
        };
        console.log("newPhoto:", newPhoto);

        const backendPost = await fetch("http://localhost:3000/photo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPhoto),
        });
        const photoData = await backendPost.json();
        console.log("photoData: ", photoData);
        setPhotos((photos) => [...photos, photoData]);
      });
      console.log(acceptedFiles);
    },
    [currentUser, setPhotos]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: true,
  });

  return (
    <div className="modal-background">
      <div
        className={
          isDragActive
            ? "photo-upload modal-container active"
            : "photo-upload modal-container"
        }
      >
        <button onClick={() => setUploadPhoto(false)} className="close-upload">
          X
        </button>
        <div className="upload-field" {...getRootProps()}>
          <input {...getInputProps()} />
          Upload Photos Here
        </div>
      </div>
    </div>
  );
}

export default PhotoUpload;
