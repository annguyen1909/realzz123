import React from 'react'


const JobCard = ({job}) => {
    const isStatus = () => {
        if (job.status === "applied") return "bg-primary"
        if (job.status === "shortlisted") return "bg-warning"
        if (job.status === "accepted") return "bg-success"
    }
    return (
        <div className="job_card">
           
            <div className="card my-3">
                <div className="card_body">
                    <div className="card_body-content">
                        <h5>{job.postId.title}</h5>
                        <p> Description: 
                        {job.postId.description.length < 180  
                            ? job.postId.description
                            : job.postId.description.slice(0, 180) + '...'}
                        </p>
                        <p>Skill: {job.postId.skillRequired}</p>
                        <p>Job Type: {job.postId.jobType}</p>
                        <p>Salary: {job.postId.salary}$ Avg.Hour</p>
                        
                    </div>
                    <div className={`status-box ${isStatus()}`}>
                        <span>{job.status}</span>
                    </div>
                </div>
            </div>
          
          
        </div>
    )
}

export default JobCard