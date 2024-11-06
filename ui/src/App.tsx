import React , {useState , useEffect } from 'react'
import axios from 'axios'

function App(){

  const [userName , setUserName ]= useState('')
  const [images , setImages ]= useState('')
  const [loading , setLoading ]= useState(true)
  const [message , setMessage ]= useState('')


  const Submithandler = () => {
    axios.post('http://localhost:5000/user' , {username : userName})
    .then((res) => {
      console.log(res.data)
      setImages(res.data.image)
      setLoading(false)
      setMessage(res.data.message)
    })
   
  }

return(<>

<form onSubmit = {Submithandler}
<input type="text" />

<button type='submit'>Lessss Goooooo</button>
/>
</>)}

export default App