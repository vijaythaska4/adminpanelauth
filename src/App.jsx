import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './commpeant/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Adminview from './pages/Admin/Adminview';
import Adminupdate from './pages/Admin/Adminupdate';
import Changepassword from './pages/Admin/Changepassword';
import Abouts from './pages/privacy/Abouts';
import Privacy from './pages/privacy/Privacy';
import Termsconditions from './pages/privacy/Termsconditions';
import Usertable from './pages/users/Usertable';
import Userview from './pages/users/Userview';
import Userupdate from './pages/users/Userupdate';

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          {/* admin */}
          <Route path='/adminview' element={<Adminview />} />
          <Route path='/adminupdate' element={<Adminupdate />} />
          <Route path='/changepasword' element={<Changepassword />} />

          {/* parivacy */}
          <Route path='/abouts' element={<Abouts />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/Termsconditions' element={<Termsconditions />} />

          {/* User */}
          <Route path='/users' element={<Usertable />} />
          <Route path='/userview/:id' element={<Userview />} />
          <Route path='/userupadte/:id' element={<Userupdate />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>


  )
}
