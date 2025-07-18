
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import EventsAndAwardsPage from './pages/EventsAndAwardsPage';
import ContactUsPage from './pages/ContactUsPage';
import Navbar from './components/HomeComponents/Navbar';
import Footer from './components/HomeComponents/Footer';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />          
        <Route path="/about" element={<AboutUsPage />} />   
        <Route path="/events" element={<EventsAndAwardsPage />} />
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
