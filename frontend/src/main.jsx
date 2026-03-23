import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./store.js";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ShippingPage from "./pages/ShippingPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import PlaceOrderPage from "./pages/PlaceOrderPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },

      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <ShippingPage />
          </PrivateRoute>
        ),
      },

      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },

      {
        path: "/placeorder",
        element: (
          <PrivateRoute>
            <PlaceOrderPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
