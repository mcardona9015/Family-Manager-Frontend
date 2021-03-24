import Scheduler from "devextreme-react/scheduler";
import List from "./List";
import "../css/Home.css";
import { Image } from "cloudinary-react";

function Home({ currentUser }) {
  const { calendars, lists, photo_albums } = currentUser;
  const photo = photo_albums[0].photos[13];
  console.log("currentUser: ", currentUser);
  console.log("photo_albums: ", photo_albums);
  console.log("lists: ", lists);
  console.log("calendars: ", calendars);
  return (
    <section className="home-container">
      <Image
        className="home-photo"
        cloudName={process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}
        publicId={photo.public_id}
        alt={photo.title}
        // onClick={handlePhotoClick}
      />
      <section className="calendar-home-container">
        <Scheduler
          timeZone="America/New_York"
          height={800}
          width={800}
          startDayHour={9}
        />
      </section>
      <section className="recent-list-container">
        <List className="recent-list" list={lists[0]} />
      </section>
    </section>
  );
}

export default Home;
