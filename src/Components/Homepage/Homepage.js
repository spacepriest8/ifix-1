import React from 'react'
import './Homepage.css'
import profile_picture_1 from "../../assets/profile-picture-1.png"
import star_rating from "../../assets/star-rate.png"
import eye_icon from "../../assets/eye-icon.png"
import arrow_right from "../../assets/arrow-right.png"
import search_icon from "../../assets/search-icon.png"

const Homepage = () => {
  return (
    <div>
        <div className='intro'>
            <div className='greeting'>
                <img src={profile_picture_1} alt='profile-picture' className='profile-picture'/>
                <p>Hi Deji!</p>
            </div>
            <div className='rating'>
                <img src={star_rating} alt='profile-picture' className='star-rating'/>                
                <img src={star_rating} alt='profile-picture' className='star-rating'/>                
                <img src={star_rating} alt='profile-picture' className='star-rating'/>
                <img src={star_rating} alt='profile-picture' className='star-rating'/>
                <p>(4 reviews)</p>
            </div>
        </div>

        <div className='wallet'>
            <h3>Wallet</h3>
            <div className='texts'>
                <div className='text'>
                    <p>Total Balance </p>
                    <img src={eye_icon}/>
                </div>
                <div className='text'>
                    <p>Add Funds </p>
                    <span>+</span>
                </div>
            </div>
            <h2 className='balance'>&#8358; 30,700.50</h2>
            <div className='history text'>
                <p>Transaction History </p>
                <img src={arrow_right}/>
            </div>       
        </div>

        <div className='search-bar'> <img src={search_icon}/> </div>

        <div className='workers-list'>
            <div className='worker-info'>
                <div className='row'>
                    <p><span class="name">Bob</span>-<span class="job-title">Dry Cleaner</span></p> 
                    <p className='location'>Kubwa, Abuja</p>
                </div>
                <div className='row'>
                    <h3 className='rate'>&#8358;<span class="price">1500</span>/hr</h3>
                    <button>View</button>
                </div>
            </div>

            <div className='worker-info'>
                <div className='row'>
                    <p><span class="name">Leah</span>-<span class="job-title">Dry Cleaner</span></p> 
                    <p className='location'>Jabi, Abuja</p>
                </div>
                <div className='row'>
                    <h3 className='rate'>&#8358;<span class="price">1500</span>/hr</h3>
                    <button>View</button>
                </div>
            </div>

            <div className='worker-info'>
                <div className='row'>
                    <p><span class="name">Sam</span>-<span class="job-title">Cleaner</span></p> 
                    <p className='location'>Ikeja, Lagos</p>
                </div>
                <div className='row'>
                    <h3 className='rate'>&#8358;<span class="price">1500</span>/hr</h3>
                    <button>View</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage