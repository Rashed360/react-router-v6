import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
//const { userId} = useParams()
  const params = useParams()
  const userId = params.userId

  return (
      <div className="card">
          <p>{userId}'s' Details</p>
      </div>
  )
}

export default UserDetails
