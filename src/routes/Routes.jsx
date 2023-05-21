import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import ProtectedRoute from "./ProtectedRoute";
import MyToy from "../pages/MyToy/MyToy";
import AddToy from "../pages/AddAToy/AddToy";
import ShopByToyCard from "../pages/Home/ShopByToyCard";
import ToyDetails from "../pages/AllToys/ToyDetails";
import MyToyUpdateForm from "../pages/MyToy/MyToyUpdateForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <ShopByToyCard></ShopByToyCard>
          </ProtectedRoute>
        ),
      },
      {
        path: "/alltoys",
        element: (
          <ProtectedRoute>
            <AllToys></AllToys>
          </ProtectedRoute>
        ),
      },
      {
        path: "/alltoys/toy/:id",
        element: (
          <ProtectedRoute>
            <ToyDetails></ToyDetails>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toytrix-server.vercel.app/alltoys/toy/${params.id}`),
      },
      {
        path: "/mytoy/:id",
        element: (
          <ProtectedRoute>
            <MyToyUpdateForm></MyToyUpdateForm>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toytrix-server.vercel.app/mytoy/${params.id}`),
      },
      {
        path: "/mytoy",
        element: (
          <ProtectedRoute>
            <MyToy></MyToy>
          </ProtectedRoute>
        ),
      },
      {
        path: "/addtoy",
        element: (
          <ProtectedRoute>
            <AddToy></AddToy>
          </ProtectedRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
