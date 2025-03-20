import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

import Home from './Components/Home';
import Games from './Components/Games';
import About from './Components/About';

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
          </Routes>
        </div>
      </section>
    </Router>
  );
}

export default App;
