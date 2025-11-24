import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function BusinessLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default BusinessLayout
