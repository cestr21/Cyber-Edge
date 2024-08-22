import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Intro from './pages/Intro';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Component to handle layout and conditional rendering of Navbar
const Layout = () => {
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Conditionally render Navbar only if not on the Intro page */}
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout /> {/* Layout component that handles Navbar and Routes */}
    </Router>
  );
}

export default App;
