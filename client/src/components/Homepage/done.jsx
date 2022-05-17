import React from 'react'
import research from '../../images/research.png'
import choosing from '../../images/choosing.png'
import pay from '../../images/pay.png'
import help from '../../images/help.png'
import '../../styles/homepage/done.css'

const Done = () => {
    return (
        <div className='best1'>
            <hr/>
            <h1>Need something done?</h1>
            <div className='boxcon1'>
                <div className='img2'>
                    <img className='icon' src={research}></img>
                </div>
            <div className='container1'>
                <h2>Post a job</h2>
                <p>It's free and easy to post a job.Simply fill in a tittle,description and budget and competitive bids come within minute</p>
            </div>
                <div className='img2'>
                    <img className='icon' src={choosing}></img>
                </div>
            <div className='container2  '>
                <h2>Choose freelancers</h2>
                <p>No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!
</p>
            </div>
                <div className='img2'>
                    <img className='icon' src={pay}></img>
                </div>
            <div className='container3'>
                <h2>Pay safely</h2>
                <p>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.
</p>
            </div>
                <div className='img2'>
                    <img className='icon' src={help}></img>
                </div>
            <div className='container4'>
                <h2>We're here to help</h2>
                <p>Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.
</p>
            </div>
            </div>
            <hr/>
        </div>
    )
}

export default Done
