import React, {useEffect, useState, useRef} from 'react';
import styled, {css} from "styled-components/macro";
// import {IoMdArrowRoundFoward, } from "react-icons/io";
import {IoArrowForward, IoArrowBack} from "react-icons/io5";


const Sliders = styled.section`
height : 100vh;
max-height : 1100px;
position: relative;
overflow: hidden;
`
const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`
const HeroSlides = styled.div`
z-index: 1;
width: 100%;
height: 100%
`
const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
 display: flex;
 alight items: center;
 justify-content: center;

 &::before {
   content: "";
   position: absolute;
   z-index: 2;
   width: 100%;
   height: 100vh;
   bottom: 0vh;
   left: 0;
   overflow: hidden;
   opacity: 0.4;
  //  background: linear
 }
`

const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover ;
`
// const Arrow = styled(IoMdArrowRoundFoward);
const HeroContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
margin-top: 400px;
width: calc(100% - 100px);
color: #fff
`


const arrowButtons = css`
width: 50px;
height: 50px;
color: #ddd;
cusor: pointer;
background: #000D;
border-radius: 50px;
padding: 10px;
// marging-right: 1rem;
margin-left: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
  background: #cd853f;
  transform: scale(1.35);
}
`
const SlideButtons = styled.div`
possition: absolute;
display: flex;
bottom: 50px;
right: 50px;
z-index: 10;
`
const PrevArrow = styled(IoArrowBack)`
${arrowButtons}`;

const NextArrow = styled(IoArrowForward)`
${arrowButtons}`;

const Hero = ({slides}) => {
  const  [current, setCurrent] = useState(0)
  const length = slides.length
  const timeOut = useRef(null)


  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => ( current === length - 1? 0 : current +1
         
      ));
    }
    timeOut.current = setTimeout(nextSlide, 3000)
    return function () {
      if(timeOut.current){
        clearTimeout(timeOut.current)
      }
    }
  }, [current, length])

  const prevSlide = () =>{
    setCurrent(current === 0 ? length - 1: current - 1)
    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
      return null
    } 
  }
  
  const nextSlide = () =>{
    setCurrent(current === length ? 0 : current + 1);
    console.log(current);
  }

  return (
    <Sliders>
      <Wrapper>
        {slides.map((slide, index) => 
       
              (          
              <HeroSlides key={index}>
                {index === current &&(
                <HeroSlider>
                <HeroImage src={slide.image} alt="img" />
                  <HeroContent>
                    <h1>{slide.imgName}</h1>
                    <p>{slide.details}</p>
                  </HeroContent>
              </HeroSlider>
                )}
                
              </HeroSlides>
            )
        )}

        <SlideButtons>
          <PrevArrow onClick={prevSlide} />

          <NextArrow onClick={nextSlide}/>

        </SlideButtons>
      </Wrapper>
      
    </Sliders>
  );
};
export default Hero;