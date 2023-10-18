// Component imports
import Header from './components/header';

// Page Imports
import AboutMe from './pages/aboutme';
import Home from './pages/home';
import QAexp from './pages/qaexperience';

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

      </Routes>

      
    </div>
  );
}

export default App;
