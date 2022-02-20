import { useNavigate } from 'react-router-dom'
import React from 'react'

const NoMatch = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Page Not Found!</h2>
      <button onClick={() => navigate(-1)} className="btn">
        &#11164; Go Back
      </button>
    </div>
  )
}

export default NoMatch
