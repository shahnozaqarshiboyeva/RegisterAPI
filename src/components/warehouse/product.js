import React, { useState,useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import WareNavbar from './navbarwarehouse'
import { ToastContainer , toast } from 'react-toastify'
import DeleteModal from './deleteproducts';
import AddProduct from './addproduct'
import http from '../../Axios';
export default function Product() {
    const [active ,setActive]=useState(false)
    const [active2 ,setActive2]=useState(false)
    const [products,setProducts]=useState([])
    const [data,setData]=useState({})
    const [id,setId]=useState()
  useEffect(()=>{
    http.get("/api/warehouse/product").then(res=>{
        setProducts(res.data.results)
        console.log(res.data.results);
  })
}, []) 
const deleteProducts=(id)=>{
    setId(id)
    setActive2(prev=>!prev)
    }
        const open=(item={})=>{
          setActive(prev=>!prev)
          setData(item)
          console.log(item)}
  return (
    <div className='container'>
        <WareNavbar/>
        <AddProduct modalValue={active} toggle={setActive} data={data} setData={setData}/>
        <DeleteModal modalValue={active2} toggle={setActive2} id={id}/> 
        <ToastContainer/>
        <div className="row">
            <div className="col-md-8 offset-2 mt-3">
                <button className='btn btn-primary my-3' onClick={open}>Add Clients</button>
                 <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>T/R</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Brand</th>
                            <th>Group</th>
                            <th>Arrival Price</th>
                            <th>Selling Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                   products.map((item,index)=>{
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                        <td>{item.code}</td>
                        <td>{item.brand.title}</td>
                        <td>{item.group.title}</td>
                        <td>{item.current_arrival_price}</td>
                        <td>{item.current_selling_price}</td>
                        <td>{item.description}</td>
                        <td><button className='btn btn-primary mt-2 mx-2' onClick={()=>open(item)}>Edit</button>
                        <button className='btn btn-danger mt-2 mx-2' onClick={()=>deleteProducts(item.id)}>Delete</button>
                        </td>
                        </tr>
                    })
                   }
                    </tbody>
                    </table>           
             </div>
        </div>
        
    </div>
  )
                }
