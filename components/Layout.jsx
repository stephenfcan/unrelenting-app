import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'
import { useStateContext } from '../context/StateContext'
import HamburgerMenu from './HamburgerMenu'

const Layout = ({ children }) => {
  const { showHamburgerMenu } = useStateContext();
  return (
    <div className='flex flex-col min-h-screen max-w-7xl mx-auto'>
      <Head>
        <title>UNRELENTING</title>
      </Head>

      <header className='sticky top-0 z-50 bg-white'>
        <NavBar />
      </header>

      <main className='main-container'>
        { showHamburgerMenu ? <HamburgerMenu /> : children}
      </main>

      <footer className='mt-auto bottom-0 pt-10'>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout