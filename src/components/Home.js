import Scheduler from "devextreme-react/scheduler";
import List from "./List";
import "../css/Home.css";
import { Image } from "cloudinary-react";
// import { useEffect } from "react";

function Home({ currentUser, setCurrentUser }) {
  const { calendars, lists, photo_albums } = currentUser;

  let mostRecentList = lists.length
    ? lists.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at))[
        lists.length - 1
      ]
    : null;

  let fav_photos = photo_albums.length
    ? photo_albums[0].photos.filter((photo) => photo.favorite === true)
    : null;
  let photo = fav_photos
    ? fav_photos[Math.floor(Math.random() * fav_photos.length)]
    : null;
  console.log("currentUser: ", currentUser);

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
        {lists.length ? (
          <List className="recent-list" list={mostRecentList} />
        ) : null}
      </section>
    </section>
  );
}

export default Home;
