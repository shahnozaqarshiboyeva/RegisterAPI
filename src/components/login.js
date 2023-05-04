import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import http from '../Axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify'
import ModalAdd from './modal'
import Notification from './notification'
export default function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [roles,setRoles]=useState([])
    const [active,setActive]=useState(false)
    const navigate=useNavigate()
    const login=(e)=>{
        e.preventDefault();
        http.post('/api/user/token/',{
            username:username,
            password:password

        }).then(res=>{           
            if (res.status === 404) {
                Notification({type:'success',text:'Xatolik mavjud emas'})
                setTimeout(()=>{
                    navigate('/main')
                },2000)
            }
            if(res.data.access_token){
                localStorage.setItem("token", res.data.access_token)
              setTimeout(()=>{
                window.location.reload()
              },2000)
            }
            clearInterval()  })
            .catch((err)=>{
            console.log(err.response.data.roles);
            setRoles(err.response.data.roles)
            if(err.response.status === 400){
                Notification({type:'error',text:'Xatolik mavjud'})
            }
            if(err.response.data.roles){
            setActive(prev=>!prev)
            }
        })
    }
  return (
    <div className='container'>
        <ModalAdd modalValue={active} toggle={()=>setActive(prev=>!prev)} roles={roles} username={username} password={password}/>
        <ToastContainer/>
        <div className="row">
            <div className="col-md-6 offset-3">
                <div className="card mt-3">
                    <div className="card-header">
                        <h1 className='text-center'>Login</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <input onChange={(e)=>setUsername(e.target.value)} type="text" className='form-control my-2' placeholder='Username...' />
                            <input onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control my-2' placeholder='Password...' />
                        </form>
                    </div>
                    <div className="card-footer">
                        <button onClick={login} className='container-fluid btn btn-info my-2'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
    }
