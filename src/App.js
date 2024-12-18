import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class="container">
        <Homepage/>
      </div>
    </div>
  );
}

export default App;