import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import JobDetails from './Components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Hook/AuthProvider';
import Login from './Components/Login/Login';
// import ErrorPage from './Components/ErrorPage/ErrorPage';
// import ErrorPage from './Components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    // errorElement:<ErrorPage></ErrorPage>,
    // errorElement:<ErrorPage></ErrorPage>,
    // ErrorBoundary:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: () => fetch ('/jobs.json')
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)

