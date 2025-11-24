import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationLayout from "./layout/RegistrationLayout";
import SignupPage from "./pages/SignupPage";
import Userlayout from "./layout/Userlayout"
import HomePage from "./pages/HomePage";
import ProductDetailspage from "./pages/ProductDetailspage"
import CartPage from "./pages/CartPage"
import OrderPage from "./pages/OrderPage"
import BuyPage from "./pages/BuyPage"
import AccountPage from "./pages/AccountPage";
import AppliancePage from "./pages/productPage";
import OrderSuccess from "./pages/OrderSuccess";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Userlayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "product",
        element: <AppliancePage />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetailspage />,
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "order",
        element: (
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "account",
        element: (
         <ProtectedRoute>
         <AccountPage/>,
         </ProtectedRoute>
          ),
      },
    ],
  },
  {
    path: "/register",
    element: <RegistrationLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "checkOut",
    element: (
      <ProtectedRoute>
        <BuyPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "ordersuccess",
    element: (
      <ProtectedRoute>
        <OrderSuccess />
      </ProtectedRoute>
    ),
  },
]);



function App() {

  return (
    <div>
      <RouterProvider router={router} />

    </div>

  );
}

export default App;


