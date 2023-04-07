import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./templates/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

function AppRouter(){
    return(
        <>
        <RouterProvider router={router} />
        </>
    )
}

export default AppRouter;