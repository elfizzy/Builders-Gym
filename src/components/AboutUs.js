import React from 'react';
import six from "../images/six.webp";


 const AboutUs = () => {
  return (
    <>
      {/* <div className= "about">
      <h1>About Us</h1>
        <div className="about-content">
        
        <div className="about-img">
    
        </div>

        <div className="about-quote">
          <p>Gimnas – Fitness Center is a professional fitness training center. We provide all kinds of fitness training and we have all modern instruments.
            On the other hand, we denounce with righteous indignation the foult anuals dislike men who are so beguiled 
            and demoralized by the nuhaiicharms of pleasure of the moment, so blinded by desire,
            that they cannot foresee the pain and trouble that are bound toen sue;
            and equal blame belongs to those who fail in their duty.</p>
        </div>
        </div>
     
      </div> */}

<div className="about">
        <div className="aboutPic">
          <img style={{maxWidth:"100%",paddingRight:"5%",}} src={six} alt="image5"/>
        </div>

        <div className="aboutText">
          <h1>About Us</h1>
          <p> <span> Builder's Gym - - -</span> is a professional fitness training center. We provide all kinds of fitness training and we have all modern equipments.</p>
            <h4>Whether you're looking to bulk up, enhance workout performance, improve recovery or shed unwanted body fat, we have a great range of workout plans to help take your training to new heights. Our selection of Muscle & Strength gym workout provide the ultimate structure you've always dreamt of.</h4>

              <a href="#"><button>Sign Up</button></a>
        </div>
        
      </div>
    </>
  )
}

export default AboutUs;