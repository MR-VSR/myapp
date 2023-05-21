import Home from './components/pages/home/home';
import MarketPlace from './components/pages/marketPlace/marketPlace.js';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (<>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/marketplace' element={<MarketPlace/>}></Route>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
