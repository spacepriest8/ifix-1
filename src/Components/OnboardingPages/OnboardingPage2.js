import React from 'react'
import './OnboardingPage.css'
import Onboarding_img_2 from "../../assets/onboarding-img-2.png"
import back_icon from "../../assets/back-icon.png"

const OnboardingPage2 = () => {
  return (
    <div className='onboarding-screen'>
        <div className='top'>
            <img src={back_icon} alt='back'/>
            <p>Skip</p>
        </div>

        <img src={Onboarding_img_2} className='onboarding-img'/>
        <div class="text-content">
            <h3 className='heading'>Home Solutions</h3>
            <h4 className='subheading'>“Your Go-To for every Task”</h4>
            <p>Need a Plumber, Painter, or just any home services, We’re ready to get it done in a jiffy.</p>
        </div>

        <button className='button'>Next</button>
    </div>
  )
}

export default OnboardingPage2