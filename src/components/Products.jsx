import axios from "axios";
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

export const Products = ({setId}) => {
    const[products,setProducts]=useState([])
    const navigate=useNavigate()
    const[deleteData,setDeleteData]=useState([])
    useEffect(()=>{
        fetchData();
    },[deleteData])
    const fetchData=async()=>{
        await axios.get("https://65d879e4c96fbb24c1bb9e82.mockapi.io/api/userdetails")
        .then(res=>setProducts(res.data))
        .catch((err)=>{console.log(err)})
    }
    
  const  handleEdit=(id)=>{
    setId(id)
navigate(`/edit/${id}`)
  }
  const handleDelete = async(id)=>{
    await axios.delete(`https://65d879e4c96fbb24c1bb9e82.mockapi.io/api/userdetails/${id}`)
    .then(res=>setDeleteData(res.data))
    .catch((err)=>{console.log(err)})

  }
  const handleCreate=()=>{
    navigate('/create')
  }
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    {products.map((item,index)=>(
        <tr key={index}>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td><button className="btn btn-success"onClick={()=>{handleEdit(item.id)}}>Edit</button></td>
      <td><button className="btn btn-danger"onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
    </tr>
    ))}
     </tbody>
</table>
<button className="btn btn-primary" onClick={handleCreate}>Create</button>
    </div>
    
  )

}
