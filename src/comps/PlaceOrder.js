import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Order Summary</h2>
      <div className="card">
        <p>Order placed, go back to home!</p>
        <button onClick={() => navigate(-1)} className="btn">
          &#11164; Go Back
        </button>
      </div>
    </div>
  )
}

export default PlaceOrder
