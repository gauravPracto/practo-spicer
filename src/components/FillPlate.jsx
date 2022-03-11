import React from 'react'
import { Link } from 'react-router-dom'

const FillPlate = () => {
  return (
    <div><h1>Fill your Plate and come Again</h1><Link to="/"><button style={{
        height:30,
    }}>Click Here to Pack More</button> </Link></div>
  )
}

export default FillPlate