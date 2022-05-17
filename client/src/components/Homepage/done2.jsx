import React from 'react'
import auction from '../../images/auction.png'
import progress from '../../images/progress.png'
import quality from '../../images/quality.png'
import resume from '../../images/resume.png'
import '../../styles/homepage/done2.css'

const Done2 = () => {
    return (
        <div className='best2'>
            <h1>What's great about it?</h1>
            <div className='boxcon'>
            <div className='img1'>
                <img className='icon' src={resume}></img>
            </div>
            <div className='container5'>
                <h2>Browse portfolios</h2>
                <p>Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
            </div>
            <div className='img1'>
                <img className='icon' src={auction}></img>
            </div>
            <div className='container6'>
                <h2>Fast bids</h2>              
                <p>Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds.

</p>
            </div>
            <div className='img1'>
                <img className='icon' src={quality}></img>
            </div>
            <div className='container7'>
                <h2>Quality work</h2>         
                <p>Freelancer.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.
</p>
            </div>
            <div className='img1'>
                <img className='icon' src={progress}></img>
            </div>
            <div className='container8'>
                <h2>Track progress</h2>         
                <p>Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.
</p>
            </div>
            </div>
            <hr/>
        </div>
    )
}

export default Done2
