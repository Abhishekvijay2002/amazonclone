import React from 'react';

function BusinessAccountForm() {
  return (
    <div>
      <div className='className=" flex   items-center justify-center font-amazon mt-20 mb-40'>
  <div className='w-[568px]  h-[900px] border border-gray-300 rounded-2xl p-9 mb-6" '>
 <h2 className="text-4xl font-semibold text-gray-900 my-4 mb-8">
  <span className="block mb-2">Enter your full name</span>
  <span className="block mb-2">and choose your</span>
  <span className="block">business password</span>
</h2>


        <form className="space-y-4">
           <label className="block text-xl font-bold  mb-1">Your name</label>
          <input
            type="text"
            className="w-full border border-gray-950 rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
           <label className="block text-xl font-bold  mb-1">Mobile Numbers</label>
          <input
            type="tel"
            className="w-full border border-gray-950 rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <div>
             <label className="block text-xl font-bold  mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-950 rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <p className="text-lg text-gray-500 mt-1 pl-5 font-medium">Passwords must be at least 6 characters.</p>
          </div>
           <label className="block text-xl font-semibold  mb-1">Password again</label>
          <input
            type="password"
            className="w-full border border-gray-950 rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button className="w-full bg-[#FFD814] hover:bg-[#CFAF11] text-black font-medium text-xl py-3 rounded border border-gray-500">
            Next step
          </button>
        </form>

        <p className="text-lg  mt-4">
          By creating an account or logging in, you agree to Amazon’s<br/>
          <a href="#" className="text-blue-600 underline hover:text-[#ff9900]">Conditions of Use</a>,{' '}
          <a href="#" className="text-blue-600 underline hover:text-[#ff9900]">Privacy Notice</a>, and the<br/>
          <a href="#" className="text-blue-600 underline hover:text-[#ff9900]">Amazon Business Terms and Conditions</a>. You agree that you <br/>are creating this business account on behalf of your organization and have authority to bind your organization.
        </p>
    </div>
  </div>
    </div>
  );
};

export default BusinessAccountForm;
