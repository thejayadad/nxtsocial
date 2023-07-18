import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center  sm:px-8 px-4 py-4 border-b border-b-primary bg-white">
        <Link href={'/'} alt="logo" className="w-28 object-contain">Home</Link>
       <nav className='flex gap-4'>
       <Link href={'/create-donut'}  className="btn btn-primary">Create</Link>
        <Link href={'/create-donut'}  className="btn btn-primary">Logout</Link>
       </nav>

    </header>
  )
}

export default Navbar