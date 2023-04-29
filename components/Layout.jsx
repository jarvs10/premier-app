import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main className='container mx-auto'>
        {children}
      </main>

      <footer className='bg-red-600 py-4 mt-9'>
        <p className='text-lg font-bold text-center text-white'>Premier League -- &copy; Todos los Derechos Reservados </p>
      </footer>
    </>

  )
}

export default Layout