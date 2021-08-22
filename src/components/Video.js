import React from 'react';
import poster from "../images/six.webp";

 const Video = () => {
  return (
    <>
    <div className="gym">
    <h1>The Gym</h1>
      <video className="vid" src="https://res.cloudinary.com/abulkhair/video/upload/v1622123599/workout_kld0fe.mp4" width="800" height="400" poster={poster} controls="controls" autoplay="true" />
      
    </div>
    
    </>
  )
}


export default Video