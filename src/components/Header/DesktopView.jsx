import React from 'react'
import profile from '../../assets/Navbar/blank_profile.png'
import dropdown from '../../assets/Navbar/dropdown.svg'
import { navLinks,moreLinks } from '../Constants/Header'
import { Link } from 'react-router'
const DesktopView = () => {
  return (
    <header
      className="w-[90%] h-[48px] fixed top-5  left-1/2 transform -translate-x-1/2 
    z-50 flex items-center justify-between"
    >
      <div className="className">
        <img src="logo.jpg" alt="logo" className="w-[40px] h-[40px]" />
      </div>
      <div className="flex ">
        <div className="flex justify-center items-center gap-1">
          <img
            src={profile}
            alt="profile"
            className="w-[24px] h-[24px] cursor-pointer"
          />

          <div className="relative flex justfiy-center items-center group">
            <h1
              className="w-[130px] h-[24px] font-poppins text-[16px] leading-[24px] 
          font-semibold text-[#1E1E1E] text-left cursor-pointer"
            >
              Register/Sign in
            </h1>
            {/* dropdown toggler */}
            <span className="cursor-pointer">
              <img
                src={dropdown}
                className="w-[20px] h-[20px] group-hover:rotate-180"
                alt="dropdown"
              />
            </span>
            {/* Dropdown Content */}
            <div
              className="absolute top-5 left-0 bg-white shadow-lg
        border border-gray-400 z-30
        w-[140px] hidden  group-hover:block 
      "
            >
              <ul className="p-2">
                <li
                  className="px-4 py-2 font-semibold cursor-pointer 
           border-b border-gray-300  last:border-none"
                >
                  Register
                </li>
                <li className="px-4 py-2 font-semibold cursor-pointer">
                  Sign in
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className='ml-5'>
    <ul className="flex space-x-3">
        {navLinks.map(({ id, title, href }) => (
            <li key={id} className={id === 'more' ? 'relative group' : ''}>
                <Link
                    to={href}
                    className={`h-6 font-poppins text-[16px] leading-[24px] 
                    text-[#1E1E1E] text-left cursor-pointer focus:font-bold flex items-center`}
                >
                    {title}
                    {id === 'more' && (
                        <span className="cursor-pointer ml-2">
                            <img
                                src={dropdown}
                                className="w-[20px] h-[20px] group-hover:rotate-180"
                                alt="dropdown"
                            />
                        </span>
                    )}
                </Link>
                {id === 'more' && (
                    <ul className="absolute left-0 mt-0 hidden w-[150px]
                    group-hover:block bg-white border border-gray-300 ">
                        {moreLinks.map(moreLink => (
                            <li key={moreLink.id} className="py-2 px-4 border border-gray-300 font-semibold text-black cursor-pointer">
                                <Link to={`more/${moreLink.href}`} className="text-black">
                                    {moreLink.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
    </ul>
</nav>
      </div>
      <div className="className"></div>
      <div className="className"></div>
      <div className="className"></div>
    </header>
  )
}

export default DesktopView
