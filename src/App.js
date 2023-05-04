import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes} from 'react-router'
import Register from './components/register'
import Login from './components/login'
import Main from './components/main'
import Warehouse from './components/warehouse';
import Salesman from './components/salesman';
import Director from './components/director';
import Financier from './components/financier';
import WareNavbar from './components/warehouse/navbarwarehouse';
import Brand from './components/warehouse/brand';
import Product from './components/warehouse/product';
import Group from './components/warehouse/group';
export default function App() {
  return (
    <>
    <Routes>
     <Route path='' element={<Login/>}/>
     <Route path='/warehouse' element={<Warehouse/>}/>
     <Route path='/salesman' element={<Salesman/>}/>
     <Route path='/director' element={<Director/>}/>
     <Route path='/financier' element={<Financier/>}/>
     <Route path='/warenavbar' element={<WareNavbar/>}/>
     <Route path='/group' element={<Group/>}/>
     <Route path='/brand' element={<Brand/>}/>
     <Route path='/product' element={<Product/>}/>
    </Routes> 
    </>
  )
}
