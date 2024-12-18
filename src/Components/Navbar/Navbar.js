import React from 'react'
import './Navbar.css'
import home_icon from '../../assets/home-icon.png'
import job_icon from '../../assets/create-job-icon.png'

const Navbar = () => {
  return (
        <div className='nav'>
            <ul className='nav-list'>
                <li>
                    <img src={home_icon} alt="Home" />
                    <p>Home</p>
                </li>            
                <li>
                    <img src={home_icon} alt="Search" />
                    <p>Search</p>
                </li>
                <li>
                    <img src={job_icon} alt="Create Job" />
                    <p>Create Job</p>
                </li>
                <li>
                    <img src={home_icon} alt="Profile" />
                    <p>Profile</p>
                </li>
            </ul>
        </div>
      )
}

export default Navbar