import React, { useState ,useEffect } from 'react'
import {Modal ,ModalFooter,ModalHeader,ModalBody} from 'reactstrap'
import http from '../../Axios'
const AddProduct=({modalValue,toggle,data,setData})=>{
    const [title,setTitle]=useState("")
    const createGroup=()=>{
        if (data.id) {
            http.put('/api/warehouse/group/').then(res=>{
                console.log(res);
            })}else if(!data.id){
                http.post('/api/warehouse/group/').then(res=>{
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
        console.log(data,'data');
        setTitle(data?.title)
    },[data])
return(
    <Modal isOpen={modalValue} toggle={CloseModal}>
        
    <ModalHeader>
    <div className="card">
    <div className="card-body">
        <input value={title} type="text" className='form-control my-2' placeholder='Name...' onChange={(e)=>setTitle(e.target.value)} />
     {
        data?.id?
        <button className='btn btn-info form-control' onClick={createGroup}>Add Group</button>   
        :
        <button className='btn btn-info form-control' onClick={createGroup}>Edit Group</button>   
     }
     </div>

    </div>



    </ModalHeader>

    </Modal>
)
    
} 
export default AddProduct
