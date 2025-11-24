import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

function Userlayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#131A22]">
      <MainHeader/>
      <div className="grow">
        <Outlet/>
      </div>
      <MainFooter/>
    </div>
  )
}


export default Userlayout
