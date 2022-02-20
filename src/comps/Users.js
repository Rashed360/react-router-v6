import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeUsers = searchParams.get('filter') == 'active'
  return (
    <div>
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      <p>Showing {activeUsers? 'Active' : 'All'} Users</p>
      <div className="card">
        <h3>User 1</h3>
        <h3>User 2</h3>
        <h3>User 3</h3>
      </div>
      <Outlet />
    </div>
  )
}

export default Users
