import React from 'react'
import banner from "../../public/banner.png"
import "../../styles/banner.scss"
const Banner = () => {
  return (
    <div id="banner"><img id="bannerImage" src={banner} /></div>
  )
}

export default Banner