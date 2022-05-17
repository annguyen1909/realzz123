import React from 'react'
import { Link } from 'react-router-dom'

const Result = ({posts}) => {

  return (
        posts.map(post => (
          <div key={post._id} className="result-card">
            <Link to={`/post/${post._id}`} className ="text-dark">
              <div className="card my-3">
                <div className="card_body">
                    <div className="card_body-content">
                        <h5 className="title">{post.title}</h5>
                        
                        <p>
                            {
                                post.description.length < 180  
                                ? post.description 
                                : post.description.slice(0, 180) + '...'
                            }
                        </p>
                        
                        <p>Skill: {post.skillRequired}</p>
                        <p>Job Type: {post.jobType}</p>
                        <p>Salary: {post.salary}$ Avg.Hour</p>

                        
                    </div>
                </div>
              </div>
            </Link>
            <hr style={{margin: '20px 0'}}></hr>
          </div>
            
        ))
    
  )
}

export default Result