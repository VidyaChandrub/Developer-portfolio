import React from "react";
import './index.css';
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/project" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
  );
}

export default App;
