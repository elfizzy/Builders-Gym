import React from 'react'
// import Button from "./Button";

const Services = () => {
  return (
    <>
    <section id="services">
      <div className="content">
      <h1>Services We Offer</h1>
      <div className="container">

        <div className="box">
          <i className="fa fa-laptop"></i>
          <h3>State of the Art Equiqments</h3>
          <p>With our modern and state of the are equipment, you get nothing but the best 
            experience in our gym house because availability of equipment is top priority for us.</p>
            {/* <a href="#"><button>View Gallery</button></a> */}
             {/* <Button primary='true'>
                Visit Galery
              </Button>  */}
        </div>


      <div className="box"> 
        <i className="fa fa-paint-brush"></i>
        <h3>Access to Nutritionist</h3>
        <p>What you eat has a big role to play when it comes to body
          building, our nutritionist are always availble to answer your question 
           regarding the best nutrion plan that works for you.
        </p>
        {/* <a href="#"><button>Talk to a Nutritionist</button></a> */}
        {/* <Button primary="true">
                Talk to a nutritionist
              </Button> */}
      </div>

      <div className="box">
        <i className="fa fa-key"></i> 
        <h3>All in One Fitness Store</h3>
        <p>As a member of builders gym, you get a huge discount when you purchase 
          any item from our fully packed store which provides
           you with all the accessory you will ever need.</p>
           {/* <a href="#"><button>Visit Store</button></a> */}
           {/* <Button primary="true">
                Visit store
              </Button> */}
      </div>
        </div>
      </div>
     
  </section>
      
    </>
  )
}

export default Services;