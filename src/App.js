import Home from './components/home/Home';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={[<Header />, <Home />]} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
