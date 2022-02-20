import React from 'react'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()

  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    }
  }

  return (
    <>
      <h2>Products Page</h2>
      <div className="card">
        <div className="navbar">
          <h3>All Products</h3>
          <NavLink style={activeStyle} to="featured">
            Featured
          </NavLink>
          <NavLink style={activeStyle} to="new">
            New
          </NavLink>
        </div>

        <Outlet />

      </div>
    </>
  )
}

export default Products
