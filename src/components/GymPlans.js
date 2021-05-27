import React from 'react'

 const GymPlans = () => {
  return (
    <>
      <section id="projects">
      <h1>Fitness Plans</h1>
      <div className="container">
          {/* <Slider> */}
        <div className="box2" data-aos="fade-up">
          <div>
            <img src="./eaze.webp" alt=""/>
            <h3>Eaze SME</h3>
            <p>An application that aim at breaching the gap between investors and Small Medium Enterprises (SME)  by providing a transparent platform that is trustworthy</p>
          </div>
      
          <div>
            {/* <a href="https://github.com/BuildForSDG/Team-028-Produc" target="_blank"  rel="noreferrer noopener"><FaGithub  className="projectFa" /></a>
            <a href="https://eazsme-frontend.herokuapp.com/" target="_blank" rel="noreferrer noopener"> <FaGlobe className="projectFa"/></a> */}
          </div>
      </div>

    
        <div className="box2" data-aos="fade-up">
          <div>
            <img src="./fit.webp" alt=""/>
            <h3>Builder's Gym</h3>
            <p>A fitness center web application with access to nutritionist and an online shop for sport equipment and wears</p>
          </div>
            <div>
            {/* <a href="#"><FaGithub  className="projectFa" /></a>
            <a href=""><FaGlobe className="projectFa"/></a> */}
            </div>
          </div>

          <div className="box2" data-aos="fade-up">
            <img src="./build.webp" alt="" />
            <h3>Yin-Yeng Engineers </h3>
            <p>A landing page for an Engineering company</p>
          <div>
            {/* <a href=""><FaGithub className ="projectFa" /></a> 
            <a href=""><FaGlobe className="projectFa"/></a> */}
            </div>
        </div>
        {/* </Slider> */}
      </div>     
      <button>View More</button>
    </section>
    </>
  )
}


export default GymPlans;