import React from 'react'

 const GymPlans = () => {
  return (
    <>
      <section id="plans">
      <h1> Membership Plans</h1>
      <div className="container">
          {/* <Slider> */}
        <div className="box2" data-aos="fade-up">
          <h3 style={price}>Basic plan</h3>
          <h1 style={price}>#50,000</h1>
          <h4>For Beginners</h4>
          <p>Unlimited access to the gym</p>
          <p>3 classes per week</p>
          <p>3 Months membership</p>
          <p>Free drink package</p>
          <p>1 Personal trainer</p>
          <button style={{width:"150px", height:"40px", margin:"10px"}}>Select Plan</button>
        </div>

    
        <div className="box2" data-aos="fade-up">
          <h3 style={price}>Medium plan</h3>
          <h1 style={price}>#70,000</h1>
          <h4>For Fitness Lovers</h4>
          {/* <button style={{width:"150px", height:"40px"}}>Select Plan</button> */}
          <p>Unlimited access to the gym</p>
          <p>4 classes per week</p>
          <p>6 Months membership</p>
          <p>Free drink package</p>
          <p>3 Personal trainer</p>
          <button style={{width:"150px", height:"40px", margin:"10px"}}>Select Plan</button>
        </div>

          <div className="box2" data-aos="fade-up">
            <h3 style={price}>Master plan</h3>
            <h1 style={price}>#90,000</h1>
            <h4>For Addicts</h4>
            {/* <button style={{width:"150px", height:"40px"}}>Select Plan</button> */}
            <p>Unlimited access to the gym</p>
            <p>5 classes per week</p>
            <p>9 Months membership</p>
            <p>Free drink package</p>
            <p>7 Personal trainer</p>
            <button style={{width:"150px", height:"40px", margin:"10px"}}>Select Plan</button>
          </div>

        {/* </Slider> */}
      </div>     
      {/* <button>View More</button> */}
    </section>
    </>
  )
}

const price = {
  color:"white"
}



export default GymPlans;