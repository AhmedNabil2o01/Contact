import React from 'react'
import Layout from './Component/Layout'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'
import NotFound from './Component/NotFound'


export default function App() {


  let routers =  createBrowserRouter([
    {path:"",element:<Layout />,children:[
      {index :true ,element:<Home />},
      {path:"about",element:<About />},
      {path:"portfolio",element:<Portfolio />},
      {path:"contact",element:<Contact />},
      {path:'*',element:<NotFound />}
      
    ]},
  ])




  return <>
   <RouterProvider router={routers}/>

  </>
}
