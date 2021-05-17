import './App.css';
import Nav from "./components/Navigation/Navs";
import Hero from "./components/Hero";
import { HeroData } from './data/HeroData';

function App() {
  return (
    <>
    <Nav/>
    <Hero slides={HeroData}/>
    </>
  );
}

export default App;
