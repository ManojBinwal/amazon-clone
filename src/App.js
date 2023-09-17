import Home from './components/home/Home';
import './App.css';
import Header from './components/header/Header';


function App() {

  return (
    //BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
