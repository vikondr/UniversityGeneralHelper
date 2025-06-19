import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import other pages as needed

import './index.css'

function taskButton(text, onClick) {
  return (
    <button
      className="py-3 px-6 rounded-lg border border-blue-500 text-white hover:border-blue-500 transition glow-on-hover cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
