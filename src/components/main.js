// import React, { useState,useEffect } from 'react'
// import 'react-toastify/dist/ReactToastify.css';
// import http from '../Axios'
// import { ToastContainer , toast } from 'react-toastify'
// import ModalAdd from './modal'
// import DeleteModal from './deletemodal';
// export default function Main() {
//     const [active ,setActive]=useState(false)
//     const [active2 ,setActive2]=useState(false)
//     const [clients,setClients]=useState([])
//     const [data,setData]=useState({})
//     const [id,setId]=useState()
//   useEffect(()=>{
//     http.get('/clients').then(res=>{
//       setClients(res.data)
//   })
//   }, []) 
//     const deleteClients=(id)=>{
//         setId(id)
//         setActive2(prev=>!prev)
//         }
//         const open=(item={})=>{
//           setActive(prev=>!prev)
//           setData(item)
//           console.log(item)}
//   return (
//     <div className='container'>
//         <ModalAdd modalValue={active} toggle={setActive} data={data} setData={setData}/>
//         <DeleteModal modalValue={active2} toggle={setActive2} id={id}/>
//         <ToastContainer/>
//         <div className="row">
//             <div className="col-md-8 offset-2 mt-3">
//                 <button className='btn btn-primary my-3' onClick={open}>Add Clients</button>
//                  <table className='table table-bordered table-hover'>
//                     <thead>
//                         <tr>
//                             <th>T/R</th>
//                             <th>Name</th>
//                             <th>PhoneNumber</th>
//                             <th>Adress</th>
//                             <th>Image</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                    {
//                     clients.map((item,index)=>{
//                         return <tr key={index}>
//                             <td>{index+1}</td>
//                         <td>{item.name}</td>
//                         <td>{item.phone_number}</td>
//                         <td>{item.address}</td>
//                         <td><img style={{height:50,width: 50}} src={item.image}  alt=""/></td>
//                         <td><button className='btn btn-primary mt-2 mx-2' onClick={()=>open(item)}>Edit</button>
//                         <button className='btn btn-danger mt-2 mx-2' onClick={()=>deleteClients(item.id)}>Delete</button>
//                         </td>
//                         </tr>
//                     })
//                    }
//                     </tbody>
//                     </table>           
//              </div>
//         </div>
        
//     </div>
//   )
//     }
