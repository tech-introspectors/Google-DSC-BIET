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
      <div>  
      <div className = "btn_custom_container">
        <Button 
          text = "Create Project"
          column = "2"
          buttonSize = '50px'
          buttonWidth = '170px'
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
