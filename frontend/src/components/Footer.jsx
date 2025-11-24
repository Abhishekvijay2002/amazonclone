import React from 'react'

function Footer() {
    return (
 <footer className="w-full text-center text-xl mb-24 bg-white">
       <div className="max-w-[92%] mx-auto h-[3px] bg-linear-to-r from-transparent via-gray-300 to-transparent my-6 bg-white" />
      <div className="flex justify-center space-x-10 mb-2 bg-white">
        <a href="#" className="hover:underline hover:text-[#ff9900] text-[#2A8FD7]">Conditions of Use</a>
        <a href="#" className="hover:underline hover:text-[#ff9900] text-[#2A8FD7]">Privacy Notice</a>
        <a href="#" className="hover:underline hover:text-[#ff9900] text-[#2A8FD7]">Help</a>
      </div>
      <p className="text-black">© 1996-2016, Amazon.com, Inc. or its affiliates</p>
    </footer>
    )
}

export default Footer