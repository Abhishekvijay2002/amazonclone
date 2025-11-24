import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

function Userlayout() {
  return (
    <div>
        <MainHeader/>
      <Outlet/>
      <MainFooter/>
    </div>
  )
}

export default Userlayout
