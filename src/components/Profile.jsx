import React, { useContext } from 'react'
import { AppContext } from '../context/appcontext'

const Profile = () => {
  const {phone} =useContext(AppContext);

  return (
    <div>
        <h1>Profile</h1>
        <h2>phone no : {phone}</h2>
    </div>
  )
}

export default Profile