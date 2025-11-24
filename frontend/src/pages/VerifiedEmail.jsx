import Footer from "../components/footer";


function VerifyEmail() {
  return (
    <div>
      <div className=" flex mt-12  items-center justify-center font-amazon">
  <div className="w-[568px]  h-[600px] border border-gray-300 rounded-2xl p-9 mb-6" >

  
    <h1 className="text-4xl font-semibold mb-4 mt-5">
      Verify email address
    </h1>

    <p className=" mb-4 text-xl font-normal">
      To verify your email , we've sent a One Time <br/>Password (OTP) to
      jagdishamandhalkar1308@gmail.com
      <a href="#" className="text-[#2A8FD7] ml-1 underline hover:text-[#ff9900]">
        (Change)
      </a>
    </p>
    <label className="block text-xl font-semibold mb-1">
      Enter OTP
    </label>
    <input
      type="text"
      className="w-full border border-gray-950 rounded p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-yellow-500"
    />
    <button className="w-full bg-[#FFD814] hover:bg-[#CFAF11]  text-xl font-normal py-3 rounded mb-4 border border-gray-500">
      Create your Amazon account
    </button>
   <p className="text-lg text-gray-800 leading-snug ">
  By creating an account or logging in, you agree to Amazon’s{" "}
  <a href="#" className="text-[#2A8FD7] underline hover:underline hover:text-[#ff9900]">
    Conditions of Use{" "}
  </a>,
  <a href="#" className="text-[#2A8FD7] underline hover:underline hover:text-[#ff9900]">
    Privacy Notice
  </a>
  , and the<br/>
  <a href="#" className="text-[#2A8FD7] underline hover:underline hover:text-[#ff9900]">
    Amazon Business Terms and Conditions
  </a>
  . You agree that <br/> you are creating this business account on behalf of your<br/>
  organization and have authority to bind your organization.
</p>
    <div className="text-center mt-6">
      <a href="#" className="text-[#2A8FD7] text-xl hover:underline hover:text-[#ff9900]">
        Resend OTP
      </a>
    </div>

  </div>
</div>

    <Footer/>
    </div>
  );
};

export default VerifyEmail;
