import React from 'react'
import './OnboardingPage.css'
import Onboarding_img_1 from "../../assets/onboarding-img-1.png"

const OnboardingPage1 = () => {
  return (
    <div className='onboarding-screen'>
        <img src={Onboarding_img_1} className='onboarding-img'/>
        <div class="text-content">
          <h3 className='heading'>Welcome to iFIX</h3>
          <h4 className='subheading'>“We are Here to Help”</h4>
          <p>From fixing a leak to running a quick errand, we’ll connect you with someone who’s ready to assist.</p>
        </div>

        <button className='button'>Next</button>
    </div>
  )
}

export default OnboardingPage1