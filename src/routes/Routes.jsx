

import { createBrowserRouter } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout";
import Coffees from '../pages/Coffees';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import CoffeeCards from '../components/CoffeeCards';
import CoffeeDetail from '../pages/CoffeeDetail';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path: '/',
        element: <Home />,
        loader:()=>fetch('../categories.json'),
        children:[
            {
              path:'/',
              element: <CoffeeCards />,
              loader:()=>fetch('../coffees.json'),
            },
            {
              path:'/category/:category',
              element: <CoffeeCards />,
              loader:()=>fetch('../coffees.json'),
            },
        ],
      },
      {
        path:'/coffees',
        element: <Coffees />,
        loader:()=>fetch('../coffees.json'),
      },
      {
        path:'/dashboard',
        element: <Dashboard />
      },
      {
        path:'/coffee/:id',
        element: <CoffeeDetail />,
        loader:()=>fetch('../coffees.json'),
      },
    ],
  },
])

export default routes ;