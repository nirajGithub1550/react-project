
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Layout from './components/layouts/Layout';
import Pagenotfound from './pages/Pagenotfound';
import Contact from './pages/Contact';
import About from './pages/About';
import Menu from './pages/Menu';
import Home from './pages/Home';


function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='*' element={<Pagenotfound/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
