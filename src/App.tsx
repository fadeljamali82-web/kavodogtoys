import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Product from './pages/Product';
import Sizes from './pages/Sizes';
import Materials from './pages/Materials';
import Future from './pages/Future';
import Contact from './pages/Contact';
import BackProject from './pages/BackProject';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/product" element={<Product />} />
            <Route path="/sizes" element={<Sizes />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/future" element={<Future />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/back-the-project" element={<BackProject />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
