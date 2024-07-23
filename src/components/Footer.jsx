import React, { useContext } from 'react'
import { AppContext } from '../context/appcontext';

const footer = () => {

  const {phone} = useContext(AppContext);
  return (
    <div>
        <h1>footer</h1>
        <h2>phone no: {phone} </h2>
    </div>
  )
}

export default footer