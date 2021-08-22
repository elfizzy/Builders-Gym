import React from 'react';
import Burger from "./Burger";
import styled from 'styled-components';
import logo from "../../images/logo.png";
// import zIndex from '@material-ui/core/styles/zIndex';

const Nav = styled.nav`
width: 100%;
height: 75px;
display: flex;
background: #262626;
border-bottom: 2px solid #f1f1f1;
padding: 3px 20px;
justify-content: space-between;
position:fixed;
// margin-bottom: 100px;
z-index: 100;

.logo {
  
// position: fixed;
    // padding: 15px 0;
     max-width: 250px;
    // height: 250px;
    margin-botom: 100px;
}
img {
  margin-top: 10px;
  max-width:300px;
  max-height:300px;
}

// .logo span {
//   border-right: #e8563e 3px solid;
//   padding-right: 3px;
// }
.logo a {
  color:white;
}
`

const Navs = () => {
  return (
    //has a class of nav
    <div >
      <Nav className="">
      <div className="logo">
      <a href="#"><img src={logo} alt="logo" style={{}} /></a>
        {/* LOGO */}
      </div>
      <Burger />
      </Nav>
    </div>
    
  )
}

export default Navs
