import React from 'react'
import './Navbar.css'
import home_icon from '../../assets/home-icon.png'
import search_icon from '../../assets/search-icon.png'
import job_icon from '../../assets/create-job-icon.png'
import profile_icon from '../../assets/profile-icon.png'
import home_icon_colored from '../../assets/home-icon-colored.png'

const Navbar = () => {
  return (
        <div className='nav'>
            <ul className='nav-list'>
                <li className='home'>
                    <span className='icon'></span>
                    <p>Home</p>
                </li>            
                <li className='search'>
                    <span className='icon'></span>
                    <p>Search</p>
                </li>
                <li className='create-job'>
                    <span className='icon'></span>
                    <p>Create Job</p>
                </li>
                <li className='profile'>
                    <span className='icon'></span>
                    <p>Profile</p>
                </li>
            </ul>
        </div>
      )
}

export default Navbar