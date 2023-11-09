import React from 'react'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className="container p-12 flex justify-between w-screen">
            <span><img src="/logo-removebg-preview.png" alt="logo" class="md:h-24 lg:h-28  h-16"/></span>
            <p className='text-slate-700'> All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer