import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Landmarkr from './pages/Landmarkr';
import PhonePe from './pages/PhonePe';
import KitchenCraft from './pages/KitchenCraft';
import XAI from './pages/XAI';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landmarkr" element={<Landmarkr />} />
          <Route path="/phonepe" element={<PhonePe />} />
          <Route path="/kitchencraft" element={<KitchenCraft />} />
          <Route path="/xai" element={<XAI />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
