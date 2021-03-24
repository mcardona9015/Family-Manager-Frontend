import Scheduler from "devextreme-react/scheduler";
import List from "./List";
import "../css/Home.css";
import { Image } from "cloudinary-react";

function Home({ currentUser }) {
  const { calendars, lists, photo_albums } = currentUser;
  const fav_photos = photo_albums[0].photos.filter(
    (photo) => photo.favorite === true
  );
  const photo = fav_photos[Math.floor(Math.random() * fav_photos.length)];
  console.log("currentUser: ", currentUser);
  console.log("photo_albums: ", photo_albums);
  console.log("lists: ", lists);
  console.log("calendars: ", calendars);
  return (
    <section className="home-container">
      {photo ? (
        <Image
          className="home-photo"
          cloudName={process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}
          publicId={photo.public_id}
          alt={photo.title}
          // onClick={handlePhotoClick}
        />
      ) : null}
      <section className="calendar-home-container">
        <Scheduler
          timeZone="America/New_York"
          height={800}
          width={800}
          startDayHour={9}
          dataSource={calendars}
        />
      </section>
      <section className="recent-list-container">
        <List className="recent-list" list={lists[0]} />
      </section>
    </section>
  );
}

export default Home;
