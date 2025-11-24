import React, { useState } from 'react';
import Footer from '../components/footer';
import GoogleAuthButton from '../components/google/GoogleAuthButton';

function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mobile number verification triggered!');
  };

  return (


    <div>
       <div>
        <div className="flex justify-center mt-4 ">
          <img src="./Amazonlogo2.png" alt="Amazon" className="w-75 " />
        </div>

<div className='className=" flex   items-center justify-center font-amazon">'>
  <div className='w-[568px]  h-[750px] border border-gray-300 rounded-2xl p-9 mb-6" '>
          <h2 className="text-4xl font-semibold mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xl font-semibold  mb-1">Your name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-xl font-semibold mb-1">Mobile number</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-xl font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFD814] hover:bg-[#CFAF11] text-black font-semibold text-xl py-3 rounded-xl mt-1"
          >
            Verify mobile number
          </button>
        </form>
<hr className="my-5 border-gray-300" />

        <p className='font-semibold text-2xl my-2 '> Buying for work?<br/></p>
            <p>
            <a href="#" className="text-blue-600 hover:underline  hover:text-[#ff9900] text-xl">
              Create a free business account
            </a>
          </p>
          <div className="max-w-[92%] mx-auto h-[3px] bg-linear-to-r from-transparent via-gray-300 to-transparent my-6" />
          <p className='text-xl'>
            Already have an account?{' '}
            <a href="#" className="text-blue-600 inline-flex items-center hover:underline hover:text-[#ff9900]">
              Sign in <img src="./bluearrow.png" alt="Arrow" className="  w-4 h-4 ml-1 mt-1"  />
            </a>
          </p>
          <p className="text-lg mt-4">
            By creating an account or logging in, you agree to Amazon's<br/>
            <a href="#" className="text-blue-600 underline hover:text-[#ff9900]">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 underline hover:text-[#ff9900]">
              Privacy Notice
            </a>.
          </p>
          
          </div></div>

      <div className='className=" flex items-center justify-center font-amazon">'>
        <div className='w-[568px]  h-[110px]  mb-6 mt-2'>

          <div className="flex items-center my-4">
            <div className="grow h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">or</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>

          {/* <button className=" relative flex items-center justify-center gap-2 border border-gray-400 rounded py-2 px-4 w-full mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              className="w-5 h-5 absolute left-4"
              alt="Google logo"
            />
            Login with Google
          </button> */}
          <GoogleAuthButton/>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default SignupPage;
