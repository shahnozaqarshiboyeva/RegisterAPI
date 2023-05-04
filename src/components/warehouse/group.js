import React, { useState,useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import WareNavbar from './navbarwarehouse'
import { ToastContainer , toast } from 'react-toastify'
import AddGroup from './addgroup';
import DeleteModal from './deletegroups';
import http from '../../Axios';
export default function Main() {
    const [active ,setActive]=useState(false)
    const [active2 ,setActive2]=useState(false)
    const [group,setGroup]=useState([])
    const [data,setData]=useState({})
    const [id,setId]=useState()
  useEffect(()=>{
    http.get('/api/warehouse/group/').then(res=>{
     setGroup(res.data.results)
     console.log(res.data.results);
  })
  }, []) 
  const deleteGroup=(id)=>{
    setId(id)
    setActive2(prev=>!prev)
    }
        const open=(item={})=>{
          setActive(prev=>!prev)
          setData(item)
          console.log(item)
        }
  return (
    <div className='container'>
        <WareNavbar/>
        <AddGroup modalValue={active} toggle={setActive} data={data} setData={setData}/>
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
                   group.map((item,index)=>{
                        return <tr key={index}>
                          <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>
                        <button className='btn btn-primary mt-2 mx-2' onClick={()=>open(item)}>Edit</button>
                        <button className='btn btn-danger mt-2 mx-2' onClick={()=>deleteGroup(item.id)}>Delete</button>
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
