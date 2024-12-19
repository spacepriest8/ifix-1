import React from 'react'
import './Successfulpost.css'
import success_icon from "../../assets/success-icon.png"

const Successfulpost = () => {
  return (
    <div>
        <div className='content'>
            <img src={success_icon} alt='Congrats'/>
            <h4>Congratulations</h4>
            <h3>Job Posted Successful!</h3>
        </div>
    </div>
  )
}

export default Successfulpost