// Component imports
import Header from './components/header';

// Page Imports
import AboutMe from './pages/aboutme';
import Home from './pages/home';
import QAexp from './pages/qaexperience';
import Projects from './pages/projects';

// CSS import
import './App.css';

// Router Import 
import {Route, Routes } from "react-router-dom"

// Main App
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aqexperience" element={<QAexp />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>

      
    </div>
  );
}

export default App;
