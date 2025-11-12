import React from 'react'
import Header from '../components/Header'
import UserNavbar from '../components/UserNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const UserDashboard = () => {
  return (
    <div>
      <Header/>
      <UserNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserDashboard
