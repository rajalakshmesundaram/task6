import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Create = () => {
    const navigate=useNavigate()
    const[createData,setCreateData]=useState({
        id:'',
        name:'',
        username:'',
        email:''
    })
     const handlechange=(e)=>{
        const{name,value}=e.target
        setCreateData((val)=>({
            ...val ,[name] : value
        })
        )
    }
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        await axios.post(`https://65d879e4c96fbb24c1bb9e82.mockapi.io/api/userdetails`,createData)
        
       
        .catch((err)=>console.log(err))
        navigate('/products')
    }



  return (
    <>
     <form onSubmit={handleFormSubmit}>
    <div className="container">
        <div className="mb-3 mr-3 row">
    <label className="col-sm-2 col-form-label">ID</label>
    <div className="col-lg-4">
      <input type="text"  name='id' value={createData.id} onChange={handlechange}/>
    </div>
  </div>
   <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">Name:</label>
    <div className="col-lg-4">
      <input type="text"  name='name' value={createData.name} onChange={handlechange}/>
    </div>
  </div>
  <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">UserName:</label>
    <div className="col-lg-4">
      <input type="text"  name='username' value={createData.username} onChange={handlechange}/>
    </div>
  </div>
  <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">Email:</label>
    <div className="col-lg-4">
      <input type="text"  name='email' value={createData.email} onChange={handlechange}/>
    </div>
  </div>
  </div>
   <button className="btn btn-success" type='submit' >Create</button>
  </form>
  
    </>
  )
}
