import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header';
import Contact from './components/sections/Contact';
import Working from './components/sections/Working';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Footer from './components/sections/Footer';
import Services from './components/sections/servises';
import Marketssection from './components/sections/Markets';
import CreatePortfolio from './components/Portfolio/Form';
import Profile from './components/sections/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Working />
              <Services />
              <Marketssection />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/create-portfolio" element={<CreatePortfolio />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
