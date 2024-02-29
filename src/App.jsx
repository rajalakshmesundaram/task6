import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Products } from "./components/Products"
import { Edit } from "./components/Edit"
import { useState } from "react"
import { Create } from "./components/Create"

export const App = () => {
  const[id,setId]=useState(0)
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products" element={<Products setId={setId}/>}/>
      <Route path="/edit/:id" element={<Edit id={id}/>}/>
      <Route path="/create" element={<Create/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
