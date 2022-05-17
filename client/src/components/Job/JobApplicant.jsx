import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
import StarRating from '../Profile/StarRating'
import JobStatus from './JobStatus'


const JobApplicant = ({jobStatus}) => {
    
    return (
        <div className="job_card">
            {jobStatus.jobs.map(job => (
                <div className="card my-3" key={job._id}> 
                    <div className="applicant_card" key={job._id}>
                        <div className="applicant_body">
                            <div className="card_header">
                                <div className="d-flex">
                                    <Avatar src={job.userId.avatar} size="big-avatar" />
                                    <div className="card_name">
                                        <h6 className="">
                                            <Link to={`/profile/${job.userId._id}`} className="text-dark text-decoration-none" >
                                                {job.userId.username}
                                            </Link>
                                        </h6>
                                        <StarRating />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="card_content">
                                <p>Reason of applying: {job.sop} </p>
                                <p>
                                    Applied on: {moment(job.createdAt).fromNow()} ({moment(job.createdAt).format('MM/DD/YYYY')})
                                </p>
                            </div>
                        </div>
                        <JobStatus job={job} />
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobApplicant