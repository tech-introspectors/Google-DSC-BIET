import React from "react";
import Events_Card from "./components/Events_Card";
import EventsData from "./data/EventsData";
import Footer from "../../components/Footer";

export default function Event() {
  const data = (val, i) => {
    console.log(val.template && "correct");
    return (
      <>
      {val.template && val.events_on && val.event_name ? <Events_Card
        template={val.template}
        events_on={val.events_on}
        event_name={val.event_name}
      /> : <div className = "_message"><h6>No Events Available Right Now</h6></div>
  }
      </>
    );
  };
  return (
    <>
      <div id="egg">
        <div className="container contact_container" id="star-five ">
          <h2 className="text-center custom_heading">Our Events</h2>
          <div className="border_animation"></div>

          {/* // rendering team members details // */}
          <div className="container">
            <div className="row justify-content-center ">
              {EventsData.map(data)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
