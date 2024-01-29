
import { BrowserRouter as Router, Route, Redirect, Switch, Routes } from "react-router-dom";
import './App.css';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Footer from './components/Footer';
import Header1 from './components/Header1';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div  className="App">
      <Header1/>      
     <Home/>
     <Aboutme/>
     <Education/>
     <Skills/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
