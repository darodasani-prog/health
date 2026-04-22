import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FirebaseProvider } from './context/FirebaseContext';
import { 
  Home, 
  FoodSwaps, 
  Tracking, 
  Herbs, 
  Guide, 
  Community, 
  About, 
  Contact 
} from './pages';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <div className="min-h-screen bg-eggshell font-sans selection:bg-clay selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/food-swaps" element={<FoodSwaps />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/herbs" element={<Herbs />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
