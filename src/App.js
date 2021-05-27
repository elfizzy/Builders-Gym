import './App.css';
import Nav from "./components/Navigation/Navs";
import Hero from "./components/Hero";
import { HeroData } from './data/HeroData';
import Services from "./components/Services";
import About from "./components/AboutUs";
import Video from "./components/Video";
import GymPlan from "./components/GymPlans";

function App() {
  return (
    <>
    <Nav/>
    <Hero slides={HeroData}/>
    <About/>
    <Services/>
    <Video/>
    <GymPlan/>
    </>
  );
}

export default App;
