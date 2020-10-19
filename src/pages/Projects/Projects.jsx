import React from "react";
import Footer from '../../components/Footer';
import Button from '../Home/components/Button';
import '../Home/Home.css';

export default function Projects() {
  return (
    <>
       <div id = "egg" >
        <div className="container contact_container" id = "star-five ">
          <h2 className = "text-center custom_heading">Our Projects</h2>
           
          <div className = "row">
            <div className = "col-lg-12 d-flex justify-content-center">
            <Button 
              text = "ADD  YOUR PROJECT"
              column = "12"
              buttonSize = '50px'
              buttonWidth = '250px'
              borderRadius = "5px"
              btn_customStyle = "btn_customs"
            />
            </div>
          </div>
      </div>
      
      <Footer />
    </div>  
    </>
  );
}
