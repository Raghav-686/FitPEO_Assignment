import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SideBar from './components/SideBar/SideBar'
import {Outlet , RouterProvider, createBrowserRouter} from 'react-router-dom'
import DashBoard from './components/DashBoard/DashBoard'
import Customers from './components/Customers'
import Product from './components/Product'
import Promote from './components/Promote'
import Help from './components/Help'
import Income from './components/Income'

const App=()=>{
    return (
    <div className='flex main-wrapper w-full'>
        <div className='side-bar'><SideBar /></div>
        <div className='outlet'><Outlet /></div>
    </div>
    )
}

const route = createBrowserRouter(
    [
        {path:'/' , element:<App/> ,
        children:[
            {path:'/',element:<DashBoard/>},
            {path:'/Dashboard',element:<DashBoard/>},
            {path:'/Customers',element:<Customers/>},
            {path:'/Product',element:<Product/>},
            {path:'/Promote',element:<Promote/>},
            {path:'/Help',element:<Help/>},
            {path:'/Income',element:<Income/>},
        ]}
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route}/>);
