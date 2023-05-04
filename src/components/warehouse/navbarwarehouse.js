import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbarwarehouse() {
    const [navbar,setNavbar]=useState([
        {name:'Group',path:'/group'},
        {name:'Product',path:'/product'},
        {name:'Brand',path:'/brand'},
        
    ])

  return (
    <div className='container-fluid'>
<div className="row">
<div className="py-4 bg-info d-flex justify-content-center align-items-center">
<ul className='d-flex gap-5 mt-3'>
{
      navbar.map((item,index)=>{
        return <li className='list-unstyled' key={index}>
           <Link className='text-decoration-none h4 text-white' to={item.path}>{item.name}</Link>     
        </li>
      })
        }
</ul>
   </div>
</div>
    </div>
  )
}
