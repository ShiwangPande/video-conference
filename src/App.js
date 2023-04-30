import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';

function App() {
  return (
    <div className=''>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
