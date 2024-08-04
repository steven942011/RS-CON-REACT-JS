import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Feeds } from '../components/publication/Feeds';


export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<PublicLayout/>}> 
            <Route index  element={<Login/>} />
            <Route path='login'  element={<Login/>} />
            <Route path='registro'  element={<Register/>} />
         </Route>
         
         <Route path='/social' element={<PrivateLayout/>}>
          <Route index element={<Feeds/>}/>
          <Route path='feed' element={<Feeds/>}/>
         </Route>
      </Routes>
    
    </BrowserRouter>
  )
}
