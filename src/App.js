import React ,{Component} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './source/Home.js';
import Gamchu from './source/Gamchu.js';
import Daou from './source/Daou.js';
import Silvable from './source/Silvable.js';
import CodeChallenge from './source/CodeChallenge.js';
import Trip from './source/Trip.js';
function App() {
  return (
    <Router>
      <Routes>           
        <Route path="/" element={<Home/>}/>
        <Route path="/gamchu" element={<Gamchu/>}/>
        <Route path="/Daou" element={<Daou/>}/>
        <Route path="/Silvable" element={<Silvable/>}/>
        <Route path="/CodeChallenge" element={<CodeChallenge/>}/>
        <Route path="/Trip" element={<Trip/>}/>
      </Routes>  
    </Router>
  );
}

export default App;
