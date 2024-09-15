import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Scenery from './components/Scenery';

function App() {
  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/scenery' element={<Scenery />} />
        </Routes>
    </>
  );
}

export default App;
