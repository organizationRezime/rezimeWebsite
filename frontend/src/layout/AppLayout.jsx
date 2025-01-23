import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from './Navbar'
import Footer from './Footer'

function AppLayout() {
  return (<>
    <ScrollToTop/>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
)
}

export default AppLayout