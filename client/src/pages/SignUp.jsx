import React from 'react'
import {Link} from "react-router-dom"
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>  
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      
      <form className='flex flex-col gap-4'>
          <input type="text" placeholder='username'
           className='border p-3 rounded-lg' id='username'
            onChange={handleChange}/>
           <input type="email" placeholder='email'
           className='border p-3 rounded-lg' id='email'
            onChange={handleChange}/>
           <input type="password" placeholder='password'
           className='border p-3 rounded-lg' id='password'
            onChange={handleChange}/>
           <button className='bg-slate-700 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-75'>SIGN UP</button>
      </form>

      <div className='flex gap-2 mt-4'>
        <p>Already Have an account ?</p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
