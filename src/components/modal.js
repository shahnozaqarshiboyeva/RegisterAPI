import React, { useState ,useEffect } from 'react'
import {Modal ,ModalFooter,ModalHeader,ModalBody} from 'reactstrap'
import http from '../Axios'
import { useNavigate } from 'react-router'
const ModalAdd=({modalValue,toggle,roles,username,password})=>{
 const [select,setSelect]=useState('')
 const navigate=useNavigate()
    const handleChange=(e)=>{
        setSelect(e.target.value)
    console.log(e.target.value);
}
const send=(e)=>{
    e.preventDefault();
    http.post('/api/user/token/',{
        username:username,
        password:password,
        current_role:select
    }).then(res=>{
        console.log(res.data.access);
        localStorage.setItem('token',res.data.access)
        if(res.data.access){
            if (select==="warehouseman") {
                navigate('/warehouse')
            }else if (select === "salesman"){
                navigate('/salesman')
            }else if(select==="director"){
                navigate('/director')
            }
            else if(select==="financier"){
                navigate('/financier')
            }
        }
    })
}
return(
    <Modal isOpen={modalValue} toggle={toggle}>
    <ModalBody>
    <div className="card">
        <div className="card-header">
            <h1 className='text-center'>Select Role</h1>
        </div>
<div className="card-body">
<form>
<select className='form-control' onChange={handleChange}>
    {
    roles.map((item,index)=>{
        return (
            <>
            <option value="" selected hidden> Select role</option>
            <option value={item}>{item}</option>
            </>
        )
    })}
    </select>
</form>
</div>
<div className="card-footer">
        <button className='btn btn-info'onClick={send}>Save</button>
</div>

    </div>



    </ModalBody>

    </Modal>
)
    
} 
export default ModalAdd


