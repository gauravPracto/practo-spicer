import React from 'react'
import "../styles/newLook.scss"
const NewLook = () => {
  return (
        <div className="card">
            <img src="icecream.png" alt="Ice cream Image" className="image"/>
            <div className="data">
                <h1 className="title">Ice Cream</h1>
                <span className="price">$10</span>
                <p className="description">
                    Ice cream with rich flavors and high-quality ingredients
                </p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <a href="https://www.crowdyworld.com/" className="review" target="_blank"><small>2,211 Reviews</small></a>
                <div>
                    <a href="https://www.crowdyworld.com/" className="button" target="_blank">Order Now</a>
                </div>
            </div>
        </div>
  )
}

export default NewLook