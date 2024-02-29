import axios, { Axios } from "axios";
import { useEffect, useState } from "react"

export const Home = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetchData();
    })
    const fetchData=async()=>{
        await axios.get("https://65d879e4c96fbb24c1bb9e82.mockapi.io/api/userdetails")
        .then(res=>setProducts(res.data))
        .catch((err)=>{console.log(err)})
    }
 return (
    <div>
      <div className="container mt-5">

        <h1>User Detail </h1>
        <div className="row mt-5">
          {products.map((item, index) => (
            <div className="col-lg-4"key={index} >
            <div  className="card">
                
              <div className="card-body">
                <h5 className="card-title">ID:{item.id}</h5>
                <p className="card-text">Name:{item.name}</p>
                <p className="card-text">User Name:{item.username}</p>
                <p className="card-text">Email :{item.email}</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};