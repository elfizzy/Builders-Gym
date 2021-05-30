import React from 'react'

 const GymPlans = () => {
  return (
    <>
      <section id="plans">
      <h1> Memebership Plans</h1>
      <div className="container">
          {/* <Slider> */}
        <div className="box2" data-aos="fade-up">
          <h3>Basic plan</h3>
          <h1>#50,000</h1>
          <h4>For Beginners</h4>
          <button style={{width:"150px", height:"40px"}}>Select Plan</button>
          <p>Unlimited month access to the gym</p>
          <p>3 classes per week</p>
          <p>3 Months membership</p>
          <p>Free dringk package</p>
          <p>1 personal trainer</p>

          {/* <div>
            <img src="./eaze.webp" alt=""/>
            <h3>Eaze SME</h3>
            <p>An application that aim at breaching the gap between investors and Small Medium Enterprises (SME)  by providing a transparent platform that is trustworthy</p>
          </div>
      
          <div>
            <a href="https://github.com/BuildForSDG/Team-028-Produc" target="_blank"  rel="noreferrer noopener"><FaGithub  className="projectFa" /></a>
            <a href="https://eazsme-frontend.herokuapp.com/" target="_blank" rel="noreferrer noopener"> <FaGlobe className="projectFa"/></a>
          </div> */}
      </div>

    
        <div className="box2" data-aos="fade-up">
          <h3>Medium plan</h3>
          <h1>#70,000</h1>
          <h4>For Fitness Lovers</h4>
          <button style={{width:"150px", height:"40px"}}>Select Plan</button>
          <p>Unlimited month access to the gym</p>
          <p>4 classes per week</p>
          <p>6 Months membership</p>
          <p>Free dringk package</p>
          <p>3 personal trainer</p>
          {/* <div>
            <img src="./fit.webp" alt=""/>
            <h3>Builder's Gym</h3>
            <p>A fitness center web application with access to nutritionist and an online shop for sport equipment and wears</p>
          </div>
            <div>
            <a href="#"><FaGithub  className="projectFa" /></a>
            <a href=""><FaGlobe className="projectFa"/></a>
            </div> */}
          </div>

          <div className="box2" data-aos="fade-up">
          <h3>Master plan</h3>
          <h1>#90,000</h1>
          <h4>For Addicts</h4>
          <button style={{width:"150px", height:"40px"}}>Select Plan</button>
          <p>Unlimited month access to the gym</p>
          <p>5 classes per week</p>
          <p>9 Months membership</p>
          <p>Free drink package</p>
          <p>7 personal trainer</p>
          {/* <div>  
          <img src="./build.webp" alt="" />
            <h3>Yin-Yeng Engineers </h3>
            <p>A landing page for an Engineering company</p>
          </div>
          <div>
            <a href=""><FaGithub className ="projectFa" /></a> 
            <a href=""><FaGlobe className="projectFa"/></a>
            </div> */}
        </div>
        {/* </Slider> */}
      </div>     
      {/* <button>View More</button> */}
    </section>
    </>
  )
}


export default GymPlans;