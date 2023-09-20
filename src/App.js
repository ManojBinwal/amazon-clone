import Home from './components/home/Home';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './components/checkout/Checkout';


function App() {

  return (
    //BEM - Block, Element, Modifier

    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/checkout" element=<Checkout /> />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
