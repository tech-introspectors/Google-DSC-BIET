import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub  } from 'react-icons/fa';


import Button from '../pages/Home/components/Button';
import '../pages/Home/Home.css';


const Footer = () => {

    const subscribe_form = {
        border: "none",
        boxShadow : "0 20px 40px 0 rgba(0,0,0,.1)",
        outline: "none",
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
        height: "70px",
        paddingLeft: "20px",
        fontWeight: 'normal'
    }

    return (
        <>
            <div id = "wave">
            <div className="container footer">
                <h2 className = "text-center">Subscribe to our newsletter</h2>
                <p className = "text-center">
                By subscribing to the newsletter, you will be able 
                to get constant update regarding <br/>workshops, events from us
                </p>

                <div className="col-lg-12 col-sm-12 custome_form">
                    <input className = "col-lg-6 form_input" style = {subscribe_form} type="text" placeholder = "Your Email Adddress"/>
                    <Button
                    btn_customStyle = "custom_btn"
                    text = "Subscribe"
                    column = "12"
                    buttonSize = '70px'
                    buttonWidth = '150px'
                    TopRight_Radius = '15px'
                    BottomRight_Radius = '15px'
                    />
                </div>
                
                <Link  to="/" className = "link">
                    <h1 className = "text-center logo">DSC BIET</h1>
                </Link>

                 <div className = "d-flex justify-content-center">
                    <div>
                        <a className = "social_media" href="#" target = "_black">
                            <FaFacebookF  className = "icon"/>
                        </a>
                    </div>

                    <div>
                        <a className = "social_media" href="#" target = "_black">
                            <FaTwitter  className = "icon" />
                        </a>
                    </div>

                    <div>
                        <a className = "social_media" href="#" target = "_black">
                            <FaInstagram  className = "icon" />
                        </a>
                    </div>
                    <div>
                        <a className = "social_media" href="#" target = "_black">
                            <FaGithub  className = "icon" />
                        </a>
                    </div>
                </div>
                <hr className = "col-4 m-auto"/>
                <h5 className = "text-center">Developed with <span style = {{fontSize: "18px"}}>🖤</span> by Introspctors</h5>
            </div>
            </div>
        </>
    );
}




export default Footer;
