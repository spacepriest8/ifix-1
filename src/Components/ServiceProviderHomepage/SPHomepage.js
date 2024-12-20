import React from 'react'
import './SPHomepage.css'
import profile_picture_2 from "../../assets/profile-picture-2.png"
import star_rating from "../../assets/star-rate.png"
import eye_icon from "../../assets/eye-icon.png"
import arrow_right from "../../assets/arrow-right.png"
import search_icon from "../../assets/search-icon.png"

const SPHomepage = () => {
  return (
    <div>
        <div className='intro'>
            <div className='greeting'>
                <img src={profile_picture_2} alt='profile-picture' className='profile-picture'/>
                <p>Hi Rita!</p>
            </div>
            <div className='rating'>
                <img src={star_rating} alt='profile-picture' className='star-rating'/>                
                <img src={star_rating} alt='profile-picture' className='star-rating'/>                
                <img src={star_rating} alt='profile-picture' className='star-rating'/>
                <img src={star_rating} alt='profile-picture' className='star-rating'/>
                <p>(4.5 reviews)</p>
            </div>
        </div>

        <div className='history'>
            <h3>History</h3>
            <div className='records'>
                <div className='record'>
                    <h4 className='job-title'>Dry Cleaner</h4>
                    <div className='status'>Completed</div>
                </div>
                <div className='record'>
                    <h4 className='job-title'>Dry Cleaner</h4>
                    <div className='status'>In Progress</div>
                </div>
                <div className='record'>
                    <h4 className='job-title'>Dry Cleaner</h4>
                    <div className='status'>Completed</div>
                </div>
            </div>     
        </div>

        <div className='job-list'>
            <h3>Job Listing</h3>
            <div className='job'>
                <div className='row'>
                    <p><span class="job-title">Cleaner</span></p> 
                    <p className='location'>Lekki, Lagos</p>
                </div>
                <div className='row'>
                    <h3 className='rate'>&#8358;<span class="price">1500</span>/hr</h3>
                    <button>View</button>
                </div>
            </div>

            <div className='job'>
                <div className='row'>
                    <p><span class="job-title">Plumber</span></p> 
                    <p className='location'>Wuse, Abuja</p>
                </div>
                <div className='row'>
                    <h3 className='rate'>&#8358;<span class="price">2500</span>/hr</h3>
                    <button>View</button>
                </div>
            </div>

            <div className='job'>
                <div className='row'>
                    <p><span class="job-title">Dry Cleaner</span></p> 
                    <p className='location'>Ikeja, Lagos</p>
                </div>
                <div className='row'>
                    <h3 className='rate'>&#8358;<span class="price">1000</span>/hr</h3>
                    <button>View</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SPHomepage