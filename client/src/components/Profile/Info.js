import React, { useState, useEffect } from 'react'

import Avatar from '../Avatar'
import StarRating from './StarRating'

import EditProfile from './EditProfile'
import HiredBtn from '../HiredBtn'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'



const Info = ({id, auth, dispatch, profile}) => {
  
  const [userData, setUserData] = useState([])
  const [onEdit, setOnEdit] = useState(false)

  useEffect(() => {
    if (id === auth.user?._id){
        setUserData([auth.user])
    } else {
      const newData = profile.users.filter(user => user._id === id)
      setUserData(newData)
    }
  }, [id, auth, dispatch, profile.users])

  useEffect(() => {
    if (onEdit) {
      dispatch({type: GLOBALTYPES.MODAL, payload: true})
    } else {
      dispatch({type: GLOBALTYPES.MODAL, payload: false})
    }
  }, [onEdit, dispatch])



  return (
    <div className="info">
      {
        userData.map(user => {
          return(
            <div className="info_container" key={user._id}>
              <Avatar src={user.avatar} size="supper-avatar" />
              
              <div className="info_content"> 
                <div className="info_content_title">
                  <h2>{user.username}</h2>
                  {
                    user._id === auth.user._id ? 
                    <button className="btn btn-outline-info"
                    onClick={() => setOnEdit(true)}>
                      Edit Profile
                    </button>
                    :
                    <HiredBtn />
                  }
                  
                </div>

                <h6> {user.fullname} <span className="text-danger">{user.mobile}</span> </h6>
                <div className="rating_btn">
                  <span className="me-4"><StarRating /></span>
                  <span className="me-4">{user.rating} </span> 
                </div>

                
                <p className="m-0"> Address: {user.address}</p>
                <h6 className="m-0"> Email: {user.email}</h6>

                <p>Description: {user.description}</p>
                <p>Joined: {user.createdAt}</p>


              </div>

              {
                onEdit && 
                <EditProfile 
                setOnEdit={setOnEdit}
                />
              }
            </div>
        )})
      }
    </div>
  )
}

export default Info