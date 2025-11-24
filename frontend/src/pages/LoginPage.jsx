
import Footer from '../components/footer'
import GoogleAuthButton from '../components/google/GoogleAuthButton'

function LoginPage() {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/"); // or dashboard
  //   }
  // }, [navigate]);
  
  return (

      <div>
        <div className="flex justify-center mt-4 ">
          <img src="./Amazonlogo2.png" alt="Amazon" className="w-75 " />
        </div>
<div className='className=" flex   items-center justify-center font-amazon">'>
  <div className='w-[568px]  h-[540px] border border-gray-300 rounded-2xl p-9 mb-6" '>
            <h1 className="text-4xl font-semibold mb-6 mt-2">Sign in</h1>

            <label className="text-2xl my-4 font-semibold block">Email or mobile phone number</label>
            <input
              type="text"
              className="border border-gray-400 rounded-sm p-3 w-full mb-4"
            />
            <button
              type="submit"
              className="bg-[#FFD814] hover:bg-[#CFAF11] text-black font-medium py-3 px-4 rounded-xl w-full mb-4"
            >
              Continue
            </button>
            <p className="text-lg text-gray-600 mb-4">
              By continuing, you agree to Amazon's{' '}
              <span className="text-blue-600 underline hover:text-[#ff9900]"  >Conditions of Use</span><br/>and {' '}
              <span className="text-blue-600 underline hover:text-[#ff9900]">Privacy Notice</span>.
            </p>

            {/* Help */}
            <p className=" flex items-center  text-lg text-blue-600 mb-6 cursor-pointer hover:underline hover:text-[#ff9900]"><img src="./Arrow.png" alt="Arrow" className="w-4 h-4 mr-1"  ></img>Need help?</p>

            {/* Business Section */}
            <hr className="my-6 border-gray-200" />
            <p className="text-2xl font-semibold mb-1">Buying for work?</p>
            <p className="text-lg text-blue-600 mb-4 cursor-pointer hover:underline hover:text-[#ff9900]">
              Shop on Amazon Business
            </p>

  </div>
</div>
<div className='className=" flex items-center justify-center font-amazon">'>
  <div className='w-[568px]  h-[220px]  mb-6 mt-2'>
 <div className="flex items-center my-5">
              <div className="grow h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-500">New to Amazon?</span>
              <div className="grow h-px bg-gray-300"></div>
            </div>

             <button className="border border-gray-400 rounded-xl py-2 px-4 w-full mb-4">
              Create your Amazon account
            </button>

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
</div>
  )
}

export default LoginPage