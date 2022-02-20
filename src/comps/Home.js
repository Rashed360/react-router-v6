import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <h2>Home Page</h2>
      <div className="card">
        <p>Click button to place an order!</p>
        <button
          onClick={() => navigate('order-summary')}
          className="btn"
        >
          &#128818; Place Order
        </button>
      </div>
    </>
  )
}

export default Home

{/* <button onClick={() => navigate('order-summary', { replace: true })}> */}