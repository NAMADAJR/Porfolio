import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Scenery from './components/Scenery';

function App() {
  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/scenery' element={<Scenery />} />
        </Routes>
    </>
  );
}

export default App;
