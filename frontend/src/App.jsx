import {createBrowserRouter , RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationLayout from "./layout/RegistrationLayout";
import SignupPage from "./pages/SignupPage";
import Userlayout from "./layout/Userlayout"
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailspage from "./pages/ProductDetailspage"
import CartPage from "./pages/CartPage"
import OrderPage from "./pages/OrderPage"
import BuyPage from "./pages/BuyPage"
import BusinessLayout from "./layout/BusinessLayout"
import VerifyEmail from "./pages/VerifiedEmail"
import BusinessAccountForm from "./pages/BusinessAccountForm"

const router = createBrowserRouter([
  {
   path : "/",
   element:(
   <Userlayout/>
   ),
   children : [
    {
      path: "",
      element:<HomePage/> 
    },
    {
      path: "product",
      element: <ProductPage/>
    },
    {
      path: "productdetails",
      element: <ProductDetailspage/>
    },
    {
      path: "cart",
      element: <CartPage/>
    },
    {
      path: "order",
      element:<OrderPage/>
    }
   ]
  },
    {
    path: "/register",
    element:(
        <RegistrationLayout/>
    ),
    children: [
       {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "signup",
        element: <SignupPage/>,
      },
    ]
    },
    {
      path: "checkOut",
      element: <BuyPage/>
    },
     {
    path: "/business",
    element:(
        <BusinessLayout/>
    ),
    children: [
       {
        path: "verify",
        element: <VerifyEmail/>,
      },
      {
        path: "account",
        element: <BusinessAccountForm/>,
      },
    ]
  }
  
]);





function App() {

  return (
    <div>
    <RouterProvider router={router} />

</div>
    
  );
}

export default App;


