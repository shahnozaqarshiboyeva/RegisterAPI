import React, { useState,useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import WareNavbar from './navbarwarehouse'
import { ToastContainer , toast } from 'react-toastify'
import AddBrand from './addbrand'
import DeleteModal from './deletebrand';
import http from '../../Axios';
export default function Brand() {
    const [active ,setActive]=useState(false)
    const [active2 ,setActive2]=useState(false)
    const [brand,setBrand]=useState([])
    const [data,setData]=useState({})
    const [id,setId]=useState()
  useEffect(()=>{
    http.get('/api/warehouse/brand/').then(res=>{
     setBrand(res.data.results)
     console.log(res.data.results);
     if(res.data.access_token){
        localStorage.setItem("token", res.data.access_token)
      setTimeout(()=>{
        window.location.reload()
      },2000)
    }
  })
  }, []) 
    const deleteBrand=(id)=>{
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
        <AddBrand modalValue={active} toggle={setActive} data={data} setData={setData}/>
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                   brand.map((item,index)=>{
                        return <tr key={index}>
                            <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>
                        <button className='btn btn-danger mt-2 mx-2' onClick={()=>deleteBrand(item.id)}>Delete</button>
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
