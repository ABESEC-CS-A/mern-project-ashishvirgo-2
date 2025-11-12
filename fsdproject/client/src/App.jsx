import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="about" element={<h1>About Page</h1>}/>
      <Route path="contact" element={<h1>Contact Page</h1>}/>
      <Route path="login" element={<h1>Login Page</h1>}/>
      <Route path="register" element={<h1>Register Page</h1>}/>
     </Route>
     <Route path="/user" element={<UserDashboard/>}>
      <Route path="cart" element={<h1>View Cart</h1>}/>
      <Route path="order" element={<h1>My orders</h1>}/>
      <Route path="profile" element={<h1>My profile</h1>}/>
      <Route path="logout" element={<h1>Logout Successfully</h1>}/>
     </Route>
     <Route path="/admin" element={<h1>Admin dashboard</h1>}>
      <Route path="additem" element={<h1>Add Item</h1>}/>
      <Route path="viewitem" element={<h1>View Items</h1>}/>
      <Route path="adduser" element={<h1>Add user</h1>}/>
      <Route path="viewuser" element={<h1>View user</h1>}/>
      <Route path="logout" element={<h1>Logout Successfully</h1>}/>
     </Route>
      <Route path="*" element={<h1>404 not Found Error Page</h1>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
