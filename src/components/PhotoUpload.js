import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function PhotoUpload() {
  // REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME
  console.log(
    "REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME: ",
    process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME
  );

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
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
    });
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });
  return (
    <div
      {...getRootProps()}
      className={isDragActive ? "photo-upload active" : "photo-upload"}
    >
      <input {...getInputProps()} />
      Upload Photos Here
    </div>
  );
}

export default PhotoUpload;
