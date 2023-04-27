import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes} from 'react-router'
import Register from './components/register'
import Login from './components/login'
export default function App() {
  return (
    <>
    <Routes>
     <Route path='' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
    </Routes> 
    </>
  )
}
