import React from 'react'
import imglogo from "../../assets/images/Galleries/logo.png"
import { Link } from 'react-router-dom'
const ForgetPass = () => {
  return (
    <>
<div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <img src={imglogo} className="mx-auto h-10 w-auto"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forget Password</h2>
  </div>


  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
     
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-green-500">Enter Your Email address to send verify code to change a 👇 new password</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>


  <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-green-500">Password</label>
        </div>

        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4"/>
        </div>

        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-green-500"> Confirm Password</label>
        </div>

        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4">Send Verification </button>
      </div>


      </form>
      </div>
    </>
)
}

export default ForgetPass