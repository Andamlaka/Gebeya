import React from 'react'
import DesktopView from '../Header/DesktopView'
import MobileView from '../Header/MobileView'
import Footer from '../Footer'


const Layout = ({children}) => {
  return (
    <div>
        <DesktopView />
        <MobileView />
        {children}
        <Footer />
    </div>
  )
}

export default Layout