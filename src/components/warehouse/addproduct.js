import React, { useState ,useEffect } from 'react'
import {Modal ,ModalFooter,ModalHeader,ModalBody} from 'reactstrap'
import http from '../../Axios'
const AddProduct=({modalValue,toggle,data,setData})=>{
    const [title,setTitle]=useState("")
    const [code,setCode]=useState("")
    const [brand,setBrand]=useState("")
    const [group,setGroup]=useState("")
    const createProduct=()=>{
        if (data.id) {
            http.put(`/api/warehouse/product/${data.id}`).then(res=>{
                console.log(res);
            })}else if(!data.id){
                http.post('/api/warehouse/product/').then(res=>{
                    console.log(res.status);
                    if(res.status===204){
                        window.location.reload()
                    }
                })
            }
        
    
    }
    const CloseModal=()=>{
    toggle(prev=>!prev)
    }
    useEffect(()=>{
        setTitle(data?.title)
        setCode(data?.code)
        setGroup(data?.group)
        setBrand(data?.brand)
    },[data])
return(
    <Modal isOpen={modalValue} toggle={CloseModal}>
    <ModalHeader>
    <div className="card">
    <div className="card-body">
        <input value={title} type="text" className='form-control my-2' placeholder='Name...' onChange={(e)=>setTitle(e.target.value)} />
        <input value={code} type="text" className='form-control my-2' placeholder='Code...' onChange={(e)=>setCode(e.target.value)} />
        <input value={brand} type="text" className='form-control my-2' placeholder='Group...' onChange={(e)=>setGroup(e.target.value)} />
        <input value={group} type="text" className='form-control my-2' placeholder='Brand...' onChange={(e)=>setBrand(e.target.value)} />
       
      <button className='btn btn-info form-control' onClick={createProduct}>Add Client</button>   
     </div>

    </div>



    </ModalHeader>

    </Modal>
)
    
} 
export default AddProduct
