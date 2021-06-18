import React from 'react';
import "slick-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import trainer1 from "../images/team-2.jpg";
import trainer2 from "../images/team-3.jpg";

 const Team = () => {
  let settings = {
    dot:true,
    infinite:true,
    speed: 500,
    slidesToShow: 4,
    autoScroll: true,
    slidesToScroll:1,
    cssEase: "linear"

  }
  return (
    <>
    <h3>Meet Our Experienced Trainers</h3>
    <section className="imgSlide">
      
      <Slider className="slide" {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={trainer1} alt="img1"/>
            </div>
            <ul className="socials">
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
            </ul>
            <div className="info">
              <h2>John Doe</h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={trainer2} alt="img1"/>
            </div>
            <ul>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
            </ul>
            <div className="info">
              <h2>John Doe</h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={trainer1} alt="img1"/>
            </div>
            <ul>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
            </ul>
            <div className="info">
              <h2>John Doe</h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={trainer2} alt="img1"/>
            </div>
            <ul>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
            </ul>
            <div className="info">
              <h2>John Doe</h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={trainer1} alt="img1"/>
            </div>
            <ul>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
              <li><a href="facebook"></a></li>
            </ul>
            <div className="info">
              <h2>John Doe</h2>
            </div>
          </div>
        </div>
        
      </Slider>
    </section>
    </>
  )
}

export default Team