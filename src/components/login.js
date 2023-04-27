import React, { useState } from 'react'
import http from '../Axios'
import { toast ,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Notification from './notification'
export default function Username() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const login=(e)=>{
        e.preventDefault();
        http.post('/login/',{
            username:username,
            password:password
        }).then(res=>{           
             console.log(res);
            if (res.status === 201) {
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
