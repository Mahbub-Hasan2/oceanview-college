import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../components/shared/ErrorPage";
import Layouts from "../layouts/Layouts";
import College from "../pages/College";
import CollegesPage from "../pages/CollegesPage";
import Admission from "../pages/Admission";
import MyCollege from "../pages/MyCollege";
import ProfilePage from "../pages/ProfilePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "colleges", 
        element: <CollegesPage />,
      },
      {
        path: "college/:collegeId",
        element: <College />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "mycollege",
        element: <MyCollege />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
]);

export default router;