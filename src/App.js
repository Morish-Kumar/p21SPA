import { createBrowserRouter, RouterProvider } from "react-router-dom"; // createBrowserRouter allow us to define our routes
// RouterProvider is used to tell the app that the router should be used
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      // every oject represent one routes
      // elements property define which component is to be loaded
      { path: "/products", element: <ProductsPage /> },
      {path: "/products/:productId", element: <ProductDetailPage/>}//: denote that the path here is dynamic
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // routerProvider has a special props called as router which accept the function that is created with createBrowserRouter component
  );
}

export default App;
