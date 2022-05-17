import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import '../../styles/homepage/Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect helper</h1>
                <p className='search-text'> Search the largest selection of jobs or freelancer that is professional and responsive. </p>
                <div className='btnbox'>
                    <button className='btn1'>Hire a freelancer</button>
                    <button className='btn2'>Earn money Freelancing</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
