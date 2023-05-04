import React from 'react'
import {Modal ,ModalFooter,ModalHeader,ModalBody} from 'reactstrap'
import http from '../../Axios'

const DeleteModal=({modalValue,toggle,id})=>{
  const deleteClients=()=>{
    http.delete(`/api/warehouse/group/${id}`).then(res=>{
      console.log(res);
      if(res.status===204){
        window.location.reload()
      }
    })
  }
  return (
    <Modal isOpen={modalValue} toggle={()=>toggle(prev=>!prev)}>
        <ModalBody>
            <h1 className='text-center'>O'chirishga ichonchingiz komilmi?</h1>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-info' onClick={()=>toggle(prev=>!prev)}>Close</button>
            <button className='btn btn-danger' onClick={deleteClients}>Delete</button>
        </ModalFooter>
    </Modal>
  )
}

export default DeleteModal