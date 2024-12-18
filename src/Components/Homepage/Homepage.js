import React from 'react'
import './Homepage.css'
import profile_picture_1 from "../../assets/profile-picture-1.png"
import star_rating from "../../assets/star-rate.png"

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
            <div>
                <div>
                    <p>Total Balance </p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Homepage