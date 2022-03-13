import React from 'react'
import "../styles/noElement.scss"
import { Link } from 'react-router-dom'
const NoElement = () => {
  return (
    <div id="noElement">
        <div id="noElement-left">
            Please Fill up your plate and come back .
        </div>
        <div id="noElement-right">
            <Link to="/">
            <button id="noELement-button">Back to menu</button>
            </Link>
        </div>
    </div>
  )
}

export default NoElement