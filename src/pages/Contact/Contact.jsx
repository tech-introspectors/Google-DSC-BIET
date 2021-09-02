import React from "react";
import Footer from '../../components/Footer';
import Form from "../Home/components/Form";
import Contact_Image from '../../asserts/contact134.webp';
import { FiAtSign } from 'react-icons/fi';
import {MdLocationOn} from  'react-icons/md';
import {Link} from 'react-router-dom';


import '../Home/Home.css';
import './Contact.css';
import Button from "../Home/components/Button";

export default function Contact() {
  return (
    <>
    <div id = "egg" >
      <div className="container contact_container" id = "star-five ">
        <h2 className = "text-center custom_heading">Lets Talk !</h2>
        <div className = "border_animation"></div>
        <p className = "text-center">Would like to sponsor an event. Get in touch with us!</p>

       <div className = "row">
         <div className = "col-lg-6">
          <img src = {Contact_Image} alt = "" />
         </div>

         <div className = "col-lg-6 col-md-12">
          <Form placeholder = "Name" />
          <Form placeholder = "Email" />
          <Form placeholder = "Phone" />
          <Form placeholder = "Subject" />

          <textarea className = "col-12" placeholder= "Your Message">
          </textarea>

          <Button 
            text = "SEND MESSAGE"
            buttonSize = "50px"
            column = "4"
            btn_customStyle = "send_message_btn"

          />
         </div>
       </div>

      <div className = "row d-flex justify-content-center container custom__card">
       
          <div className = "col-lg-5 col-sm-12 card__container">
              <Link  href = "#" > 
                <FiAtSign  className = "custom_icon"/>
              </Link>
              
              <div className = "_heading">
              <h2 >Email</h2>
              <p >teamintrospectors@gmail.com</p>
              </div>
          </div>

          <div className = "col-lg-5 card__container">
              <Link  href = "#" > 
                <MdLocationOn  className = "custom_icon"/>
              </Link>

              <div className = "_heading">
              <h2 >Address</h2>
              <p >Ibrahimpatnam, BIET</p>
              </div>
          </div>
        
      </div>
     
      </div>
      
      <Footer />
    </div>  
    </>
  );
}
