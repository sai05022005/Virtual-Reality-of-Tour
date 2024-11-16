/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Places from './components/Places';
import VideoPlayer from './components/VideoPlayer';
// eslint-disable-next-line no-unused-vars
import Navigation from './components/Navigation';
import Footer from './components/Footer';
function App() {
  return (
    <div className=''>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/video/:videoUrl" element={<VideoPlayer />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
