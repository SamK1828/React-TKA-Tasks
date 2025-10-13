import React from 'react'

function Login() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
       <div>
    {/* <div class="text-xl font-medium text-black dark:text-white">ChitChat</div> */}
    <h3 className='text-xl font-medium text-black dark:text-white'>Login Form</h3>
        <label className='text-xl  text-black dark:text-white'>Username :</label> <input className="border-2 " type="text" name="username" /><br/>
        <label className='text-xl text-black dark:text-white'>Password :</label> <input className="border-2" type="password" name="password" /><br/>

        <button className='bg-sky-500 hover:bg-sky-700 ...'>Login</button>
  </div>
       
        

      
    </div>
  )
}

export default Login
