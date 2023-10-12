import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            {/* LOGO */}
            <Link to='/'>
                <h1 className='font-bold text-lg sm:text-3xl flex flex-wrap'>
                    <span className='text-slate-500'>Elite</span>
                    <span className='text-slate-700'>Estate</span>
                </h1>
            </Link>

            {/* SEARCH BAR */}
            <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
                <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='txet-slate-600'/>
            </form>

            {/* MENU */}
            <ul className='flex gap-10 text-lg sm:text-xl'>
               <Link to='/'><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
               <Link to='/about'><li className='hidden sm:inline text-slate-700 hover:underline' >About</li></Link>
               <Link to='/sign-in'><li className=' text-slate-700 hover:underline' >Sign In</li></Link>
            </ul>
        </div>
    </header>
  )
}
