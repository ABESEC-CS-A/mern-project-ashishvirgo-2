import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const UserNavbar = () => {
  return (
    <div className='navbar'>
      <Link to="/user">Home</Link> | 
      <Link to="/user/cart">View Cart</Link> | 
      <Link to="/user/order">View Order</Link> | 
      <Link to="/user/profile">Profile</Link> | 
      <Link to="/user/logout">Logout</Link>
    </div>
  )
}

export default UserNavbar
