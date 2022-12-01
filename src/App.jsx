import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from './Components/Nav/Nav'

function App() {
  const [value, setvalue] = useState([])
   
  async function getproduct() {
    const data = await axios.get('https://fakestoreapi.com/products')
    const value = await data
    setvalue(value.data)
    return value
  }

   useEffect(() => {
    getproduct()
   },[])
  return (
    <>
        <Nav/>      
       

  
      
  
    </>
  )
}

export default App
