import React from "react";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Team_Members = (props) => {
  return (
    <>
      <div className="core_team_container">
        <div className="members_container">
          <img src={props.img} alt="" />
          <div className="member_details">
            <h3>{props.name}</h3>
            <p>{props.profession}</p>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <a className="social_media" href="#" target="_black">
                <FaLinkedinIn className="icon" />
              </a>
            </div>

            <div>
              <a className="social_media" href="#" target="_black">
                <FaTwitter className="icon" />
              </a>
            </div>

            <div>
              <a className="social_media" href="#" target="_black">
                <FaInstagram className="icon" />
              </a>
            </div>
            <div>
              <a className="social_media" href="#" target="_black">
                <FaGithub className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team_Members;
