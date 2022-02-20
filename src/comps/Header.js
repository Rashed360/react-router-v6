import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../utils/auth'

const Header = () => {
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    }
  }

  const auth = useAuth()

  return (
    <div className="navbar">
      <h3>React-Router</h3>
      <NavLink style={activeStyle} to="/">Home</NavLink>
      <NavLink style={activeStyle} to="/about">About</NavLink>
      <NavLink style={activeStyle} to="/products">Products</NavLink>
      <NavLink style={activeStyle} to="/users">Users</NavLink>
      <NavLink style={activeStyle} to="/profile">Profile</NavLink>
      { !auth.user && <NavLink style={activeStyle} to="/login">Login</NavLink> }
    </div>
  )
}

export default Header
