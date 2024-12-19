import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Searchpage from './Components/SearchPage/Searchpage';
import JobForm from './Components/JobForm/Jobform';
import Successfulpost from './Components/SuccessfulPosting/Successfulpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class="container">
        {/* <Homepage/> */}
        {/* <Searchpage/> */}
        {/* <JobForm/> */}
        <Successfulpost/>
      </div>
    </div>
  );
}

export default App;
