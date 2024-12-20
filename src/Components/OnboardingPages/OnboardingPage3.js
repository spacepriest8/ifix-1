import React from 'react'
import './OnboardingPage.css'
import Onboarding_img_3 from "../../assets/onboarding-img-3.png"
import back_icon from "../../assets/back-icon.png"

const OnboardingPage3 = () => {
  return (
    <div className='onboarding-screen'>
        <div className='top'>
            <img src={back_icon}/>
            <p>Skip</p>
        </div>

        <img src={Onboarding_img_3} className='onboarding-img'/>
        <div class="text-content">
            <h3 className='heading'>Make Life Easier</h3>
            <h4 className='subheading'>“Relax We’ve Got This”</h4>
            <p>Book services in a few taps and let us take care of the the hard stuff so you can focus on what matters.</p>
        </div>

        <button className='button'>Next</button>
    </div>
  )
}

export default OnboardingPage3