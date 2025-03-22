import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

import Home from './Components/Home';
import Games from './Components/Games';
import About from './Components/About';

import Jumpiiboii from './Components/Games/Jumpii boii/Jumpii boii';
import FallyBlocks from './Components/Games/Fally Blocks/Fally Blocks';
import CrashSim from './Components/Games/Crash Simulator/CrashSimulator';

function App() {
  return (
    <Router>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<Games />} />
            <Route path='/about' element={<About />} />
            <Route path='/games/jumpiiboii' element={<Jumpiiboii />} />
            <Route path='/games/fallyblocks' element={<FallyBlocks />} />
            <Route path='/games/crashsimulator' element={<CrashSim />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}

export default App;
