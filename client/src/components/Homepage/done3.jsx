import React from 'react'
import Packdes from '../../images/packdes.png'
import Logodes from '../../images/logodes.png'
import Wordp from '../../images/wordp.png'
import Mobi from '../../images/mobi.png'
import '../../styles/homepage/done3.css'

const Done3 = () => {
    return (
        <div className='best3'>
            <h1>Make it Real with Freelancer.</h1>
            <h4>Get some inspirations from 1800+ skills</h4>
        <div className='boxcon3'>
            <div className='containerz'>
            <img className='icon2' src={Logodes}></img>
                <h3>Logo Design.</h3>
                <h3>$30 USD in 1 day.</h3>
            </div>

            <div className='containerz'>
            <img className='icon2' src={Packdes}></img>
                <h3>Package Design.</h3>
                <h3>$280 USD in 4 day.</h3>
            </div>

            <div className='containerz'>
            <img className='icon2' src={Mobi}></img>
                <h3>Mobile Design.</h3>
                <h3>$680 USD in 4 days.</h3>
            </div>

            <div className='containerz'>
            <img className='icon2' src={Wordp}></img>
                <h3>WordPress.</h3>
                <h3>$45 USD in 1 day.</h3>
            </div>
            
            </div>

            

        <hr/>
        </div>
    )
}

export default Done3
