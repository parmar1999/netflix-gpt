import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
}
  return (
    <>
    <Header/>
    <div className="absolute">
        <img src="https://i.stack.imgur.com/3T2NS.jpg" alt="" />
    </div>
    <form className="p-12 w-3/12 absolute my-24
     bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70" > 
         <h1 className='width-full fold-bold text-3xl py-4
          rounded-lg'>{isSignInForm ? "Sign in":"Sign Up"}</h1>
           {!isSignInForm && <input type="text"
         placeholder='full-Name' className='bg-gray-700 w-full p-2 my-5 rounded-lg'/>}
        <input type="text" 
        placeholder='Email Address' className=' bg-gray-600 w-full p-2 my-4 rounded-lg'/>
       
         <input type="text"
         placeholder='password' className='bg-gray-700 w-full p-2 my-5 rounded-lg'/>
        <button className='p-4 my-6
         bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign in":"Sign Up"}</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
         {isSignInForm ? "New to Netflix?Sign UP Now":"Already registered?sign In Now."}</p>
        

    </form>
    </>
  )
}

export default Login
