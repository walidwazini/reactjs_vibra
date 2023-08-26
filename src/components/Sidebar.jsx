import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import {
  HiOutlineHashtag, HiOutlineHome, HiOutlineMenu,
  HiOutlinePhotograph, HiOutlineUserGroup
} from 'react-icons/hi';

import reactLogo from '../assets/react.svg'

const allLinks = [
  { name: 'Explore', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
]

const AllNavLinks = ({ handleCLick }) => (
  <div className='mt-10' >
    {allLinks.map((item, i) => (
      <NavLink key={i} to={item.to}
        className={'flex flex-row justify-start items-center my-8 text-sm text-gray-400 hover:text-cyan-400'}
        onClick={() => handleCLick && handleCLick()}
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className='md:flex just hidden flex-col w-[240px] py-10 px-4 bg-[#191624] ' >
        <img src={reactLogo} alt='logo' className='w-14' />
        <AllNavLinks />
      </div>

      {/* MOBILE SIDEBAR  */}
      <div className='absolute md:hidden block top-6 right-3' >
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={reactLogo} alt="logo" className="w-full h-14 object-contain" />
        <AllNavLinks handleCLick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar