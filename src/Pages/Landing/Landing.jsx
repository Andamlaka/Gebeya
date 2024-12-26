import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroDesktop from '../../components/Hero/HeroDesktop'
import HeroMobile from '../../components/Hero/HeroMobile'

const Landing = () => {
  return (
   <Layout>
    <HeroDesktop />
    <HeroMobile />
   </Layout>
  )
}

export default Landing