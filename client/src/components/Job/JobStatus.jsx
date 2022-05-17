import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateJob } from '../../redux/actions/jobAction'

const JobStatus = ({job}) => {
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()

    // console.log(job._id)
    
    const initialState = {status: job.status}
    
    const [jobData, setJobData] = useState(initialState)
    
    let statusMapping = {}

    if(job.status === 'applied'){
        statusMapping = {name: "Shortlist", statusCurr: "shortlisted", button: "btn-warning"}
    } 
    if (job.status === 'shortlisted'){
        statusMapping = {name: "Accept", statusCurr: "accepted", button: "btn-success"}
    }
    
    if (job.status === 'accepted'){
        statusMapping = {name: "Accept", statusCurr: "accepted", button: "btn-success"}
    }


    
    useEffect(() => {
        
    }, [])


    const handleUpdateStatus = (e) => {
        e.preventDefault()
        dispatch(updateJob(jobData, job._id, auth))

    }
    
    return (
        <div className="card_status">
            <form onSubmit={handleUpdateStatus}>
                {
                    jobData.status === 'rejected' ?
                    <></>
                    :
                    <button className={`btn ${statusMapping.button} `}
                    onClick={() => setJobData({...jobData, status: `${statusMapping.statusCurr}`})}
                    >
                        {statusMapping.name}
                    </button>
                }
                
                
                {
                    jobData.status === 'accepted' ?
                    <></>
                    :
                    <button className="btn btn-danger" 
                    onClick={() =>  setJobData({...jobData, status: "rejected"})}
                    >
                        Reject
                    </button>
                }

                <p>{jobData.status}</p>
                
            </form>
            
        </div>
    )
}

export default JobStatus