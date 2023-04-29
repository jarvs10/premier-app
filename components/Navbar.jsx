import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white flex justify-around items-center py-3 bg-red-600'>
      <h1 className="font-bold text-4xl">Premier League Teams</h1>
      <img className='w-40' src="https://logowik.com/content/uploads/images/premier-league3330.jpg" alt="" />
      {/* <Link className='font-bold text-lg' href='/'>Favoritos</Link> */}
    </nav>
  )
}

export default Navbar