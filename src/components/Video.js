import React from 'react';
import workOut from "../images/workout.mp4"
import poster from "../images/six.webp";

 const Video = () => {
  return (
    <>
    <h1>The Gym</h1>
      <video className="vid"  width="800" height="400" poster={poster} controls="controls" autoplay="true" />
      {/* vid source src="https://res.cloudinary.com/abulkhair/video/upload/v1622123599/workout_kld0fe.mp4" */}
    </>
  )
}


export default Video