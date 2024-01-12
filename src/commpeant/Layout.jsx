import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  const token = JSON.parse(localStorage.getItem("adminProfile"))?.token
  return !token ? (<Navigate to={"/"} />) : (
    <>
      <Navbar />
      <Sidebar />
      <div className="main-content ">
        <Outlet />
      </div>
      <Footer />
    </>
  )

}

export default Layout