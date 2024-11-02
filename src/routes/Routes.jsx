

import { createBrowserRouter } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout";
import Coffees from '../pages/Coffees';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/coffees',
        element: <Coffees />
      },
      {
        path:'/dashboard',
        element: <Dashboard />
      },
    ]
  },
])

export default routes ;