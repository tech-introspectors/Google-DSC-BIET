import React, { useState } from "react";
import Button from "../../Home/components/Button";
import { Link } from "react-router-dom";
import "../Event.css";

export default function Events_Card(props) {
  const [completed, setcompleted] = useState(false);
  const OnClickButton = () => {
    setcompleted(!completed);
  };

  return (
    <>
      <div className="event_container col-sm-12 col-xl-5">
        <div className="eventDetail_container">
          <img src={props.template} alt={props.event_name} />
          <div className="event_details">
            <h6>Events On : {props.events_on}</h6>
            <div className="row">
              <div className="col-xl-12">
                <Link className="link" to={props.eventLink}>
                  <h3>{props.event_name}</h3>
                </Link>

                <Button
                  text={completed ? "Completed" : "Not completed"}
                  borderRadius="15px"
                  handleOnClick={OnClickButton}
                  btn_customStyle={`${
                    completed ? "btn-danger" : "btn-primar"
                  } btn_style`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
