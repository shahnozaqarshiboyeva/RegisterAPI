import React, { useState ,useEffect } from 'react'
import {Modal ,ModalFooter,ModalHeader,ModalBody} from 'reactstrap'
import http from '../../Axios'

const ModalAdd=({modalValue,toggle,data,setData})=>{
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [img,setImg]=useState("")
    const [address,setAddress]=useState("")
    const handleChange=(e)=>{
setImg(e.target.files[0])
    }
    const createClient=()=>{
        const form=new FormData()
        form.append('image',img)
        form.append('name',name)
        form.append('phone_number',phone)
        form.append('address',address)
        if (data.id) {
            http.put(`/clients/`,form).then(res=>{
                console.log(res);
            })}else if(!data.id){
                http.post('/clients/',form).then(res=>{
                    console.log(res.status);
                    if(res.status===201){
                        window.location.reload()
                    }
                })
            }
        
    
    }
    const CloseModal=()=>{
    toggle(prev=>!prev)
    }
    useEffect(()=>{
        setName(data?.name)
        setAddress(data?.address)
        setPhone(data?.phone_number)
    },[data])
return(
    <Modal isOpen={modalValue} toggle={CloseModal}>
    <ModalHeader>
    <div className="card">
    <div className="card-body">
        <input type="file" className='form-control my-2' placeholder='Image...' onChange={handleChange}/>
        <input value={name} type="text" className='form-control my-2' placeholder='Name...' onChange={(e)=>setName(e.target.value)} />
        <input value={phone} type="number" className='form-control my-2' placeholder='Number...' onChange={(e)=>setPhone(e.target.value)} />
        <input value={address} type="text" className='form-control my-2' placeholder='Adress...' onChange={(e)=>setAddress(e.target.value)} />
      <button className='btn btn-info form-control' onClick={createClient}>Add Client</button>   
     </div>

    </div>



    </ModalHeader>

    </Modal>
)
    
} 
export default ModalAdd


