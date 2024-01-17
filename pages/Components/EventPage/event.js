//import "./event.css";

export default function Event() {
  return (
    <div className="outer">
      <div className="video-div">
        <img src="pages/Components/EventPage/img.png" className="video" />
      </div>

      <div className="content">
        <div className="heading">Verba Maximus 2024</div>

        <div className="event-name">Event</div>
        <div className="event-date">Date/Status</div>
        <div className="event-description">Description</div>

        {/* <div onClick={ } className="register-button">Register</div>
              <div onClick={ } className="register-button">Register</div> */}
      </div>

      <div className="gallery">map all the images here</div>
    </div>
  );
}
