import React from 'react'
import './Searchpage.css'
import search_icon from "../../assets/search-icon.png"
import filter_icon from "../../assets/filter-icon.png"

const Searchpage = () => {
  return (
    <div className='search-container'>
        <div className='search-bar'> 
            <p>Type in search word</p>
            <img src={search_icon}/> 
        </div>

        <div className='filter'> 
            <p> Search filters</p>
            <img src={filter_icon}/> 
        </div>

        <div className='category'>
            <h3 className='title'>Type of Service</h3>
            <ul className='options'>
                <li className='option'>Plumber</li>
                <li className='option'>Electrician</li>
                <li className='option'>Carpenter</li>
                <li className='option'>Baker</li>
                <li className='option'>Cleaner</li>
                <li className='option'>Dry Cleaner</li>
                <li className='option'>Mechanic</li>
                <li className='option'>Cook</li>
                <li className='option'>Event Planner</li>
                <li className='option'>Gardener</li>
            </ul>

            <h3 className='title'>Location</h3>
            <ul className='options'>
                <li className='option'>Abuja</li>
                <li className='option'>Rivers</li>
                <li className='option'>Kaduna</li>
                <li className='option'>Cross River</li>
                <li className='option'>Jos</li>
                <li className='option'>Lagos</li>
                <li className='option'>Kano</li>
                <li className='option'>Anambra</li>
                <li className='option'>Ogun</li>
                <li className='option'>Ondo</li>
            </ul>

            <h3 className='title'>Price Range</h3>
            <ul className='options'>
                <li className='option'>1k-5k</li>
                <li className='option'>5k-10k</li>
                <li className='option'>11k-20k</li>
                <li className='option'>21k-30k</li>
                <li className='option'>31k-40k</li>
                <li className='option'>41k-50k</li>
            </ul>

            <h3 className='title'>Star Review</h3>
            <ul className='options'>
                <li className='option'>1 Star</li>
                <li className='option'>2 Star</li>
                <li className='option'>3 Star</li>
                <li className='option'>4 Star</li>
                <li className='option'>5 Star</li>
            </ul>
        </div>

        <button className='search button'>Search</button>

    </div>
  )
}

export default Searchpage