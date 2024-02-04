
import './App.css';

import HeroSec from './components/HeroSec';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      
      
      <HeroSec></HeroSec>
      <Skills></Skills>
      <BrowserRouter>
      <Projects></Projects>
      </BrowserRouter>
      
      <Contact></Contact>
      
      
      
    </div>
  );
}

export default App;

