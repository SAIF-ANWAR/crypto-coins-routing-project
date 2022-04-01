import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CoinDetails from './components/Coin-details/CoinDetails';
import Coins from './components/Coins/Coins';
import BdAddress from './components/Contact/BdAddress';
import Contact from './components/Contact/Contact';
import UsAddress from './components/Contact/UsAddress';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/Not-Found-Page/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails></CoinDetails>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
          <Route path='us-address' element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
