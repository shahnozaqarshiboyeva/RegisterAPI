import React, { useState ,useEffect } from 'react'
import {Modal ,ModalFooter,ModalHeader,ModalBody} from 'reactstrap'
import http from '../../Axios'
const AddBrand=({modalValue,toggle,data,setData})=>{
    const [title,setTitle]=useState("")
    const createBrand=()=>{
        if (data.id) {
            http.put('/api/warehouse/brand/${id}').then(res=>{
                console.log(res);
            })}else if(!data.id){
                http.post('/api/warehouse/brand/').then(res=>{
                    console.log(res.status);
                    if(res.status===404){
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
    },[data])
return(
    <Modal isOpen={modalValue} toggle={CloseModal}>
    <ModalHeader>
    <div className="card">
    <div className="card-body">
        <input value={title} type="text" className='form-control my-2' placeholder='Name...' onChange={(e)=>setTitle(e.target.value)} />
      <button className='btn btn-info form-control' onClick={createBrand}>Add Client</button>   
     </div>

    </div>



    </ModalHeader>

    </Modal>
)
    
} 
export default AddBrand
