import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Searchpage from './Components/SearchPage/Searchpage';
import JobForm from './Components/JobForm/Jobform';
import Successfulpost from './Components/SuccessfulPosting/Successfulpost';
import Profilepage from './Components/ProfilePage/Profilepage';
import SPHomepage from './Components/ServiceProviderHomepage/SPHomepage';
import Opening from './Components/OpeningPage/Opening';
import OnboardingPage1 from './Components/OnboardingPages/OnboardingPage1';
import OnboardingPage2 from './Components/OnboardingPages/OnboardingPage2';
import OnboardingPage3 from './Components/OnboardingPages/OnboardingPage3';
import BookingService from './Components/BookingService/BookingService';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <div class="container">
        {/* <Homepage/> */}
        {/* <Searchpage/> */}
        {/* <JobForm/> */}
        {/* <Successfulpost/> */}
        {/* <Profilepage/> */}
        {/* <SPHomepage/> */}
        {/* <Opening/> */}
        {/* <OnboardingPage1/> */}
        {/* <OnboardingPage2/> */}
        {/* <OnboardingPage3/> */}
        <BookingService/>
      </div>
    </div>
  );
}

export default App;
