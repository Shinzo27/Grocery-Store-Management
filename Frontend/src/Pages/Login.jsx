import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () => {

  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  return (
    <div className="container flex justify-center items-center font-[sans-serif] text-[#333] pt-10">
        <div className="grid justify-center max-w-md mx-auto ">
          <div>
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full object-cover rounded-lg"
              alt="login-image"
            />
          </div>
          <form className="bg-white rounded-2xl p-6 -mt-24 relative z-10 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]" method="POST">
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold text-blue-600">Sign in</h3>
            </div>
            <div>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <Link
                  href="jajvascript:void(0);"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-10">
              <input
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                value={"Sign in"}
              />
              <p className="text-sm text-center mt-6">
                Don't have an account{" "}
                <Link 
                  to="/signup"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      
  )
}

export default Login