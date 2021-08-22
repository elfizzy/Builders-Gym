import React from 'react';
import pic6 from "../images/image1.webp";
import pic2 from "../images/image2.webp";
import pic5 from "../images/image3.webp";


 const Gallery = () => {
  return (
    <>
      <div className="gallery">
  <h3>Gallery</h3>
  <div className="galleryContent">

  <div className="contain">
  <div className="article">
    <img src={pic6} alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic2}alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic5} alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic2} alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic5} alt=""/>
  </div>
</div>

<div className="contain">
  <div className="article">
    <img src={pic6} alt=""/>
  </div>
</div>

  </div>
      

</div>
<footer>Copyright 2021 | Abdulhafiz </footer>
{/* <FaRegCopyright/>  */}

    </>
  )
}

export default Gallery;