import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Edit = ({id}) => {
    const navigate=useNavigate()
    const[editData,setEditData]=useState({
        id:'',
        name:'',
        username:'',
        email:''
    })
    useEffect(()=>{
fetchData()
    },[])
    const fetchData=async()=>{
        await axios.get(`https://65d879e4c96fbb24c1bb9e82.mockapi.io/api/userdetails/${id}`)
        .then((res)=>setEditData(res.data))
        .catch((err)=>console.log(err))
    }
    const handlechange=(e)=>{
        const{name,value}=e.target
        setEditData((val)=>({
            ...val ,[name] : value
        })
        )
    }
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        await axios.put(`https://65d879e4c96fbb24c1bb9e82.mockapi.io/api/userdetails/${id}`,editData)
        .then(res=>console.log(res.data))
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
      <input type="text"  name='id' value={editData.id} onChange={handlechange}/>
    </div>
  </div>
   <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">Name:</label>
    <div className="col-lg-4">
      <input type="text"  name='name' value={editData.name} onChange={handlechange}/>
    </div>
  </div>
  <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">UserName:</label>
    <div className="col-lg-4">
      <input type="text"  name='username' value={editData.username} onChange={handlechange}/>
    </div>
  </div>
  <div className="mb-3 mr-3 row">
    <label  className="col-sm-2 col-form-label">Email:</label>
    <div className="col-lg-4">
      <input type="text"  name='email' value={editData.email} onChange={handlechange}/>
    </div>
  </div>
  </div>
   <button className="btn btn-success" type='submit'>Update</button>
  </form>
  
    </>
  )
}
