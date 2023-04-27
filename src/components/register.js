import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import http from '../Axios'
import { ToastContainer , toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Notification from './notification'
export default function Register() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [password2,setPassword2]=useState('')
    const navigate=useNavigate()
    const register=(e)=>{
        e.preventDefault();
        http.post('/register/',{
            username:username,
            password:password,
            password2:password2
        }).then(res=>{           
             console.log(res);
            if (res.status === 201) {
                setTimeout(()=>{
                    navigate('/login')
                },2000)
                Notification({type:'success',text:'Xatolik mavjud emas'})
            
            }
        }).catch((err)=>{
            console.log(err.response.status);
            if(err.response.status === 400){
                Notification({type:'error',text:'Xatolik mavjud'})
            }
        })
    }
  return (
    <div className='container'>
        <ToastContainer/>
        <div className="row">
            <div className="col-md-6 offset-3">
                <div className="card mt-3">
                    <div className="card-header">
                        <h1 className='text-center'>Register</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <input onChange={(e)=>setUsername(e.target.value)} type="text" className='form-control my-2' placeholder='Username...' />
                            <input onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control my-2' placeholder='Password...' />
                            <input onChange={(e)=>setPassword2(e.target.value)} type="password" className='form-control my-2' placeholder='Confirm password...' />
                        </form>
                    </div>
                    <div className="card-footer">
                        <button onClick={register} className='container-fluid btn btn-info my-2'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
    }
