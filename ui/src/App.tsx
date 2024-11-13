import React , {useState , useEffect } from 'react'
import axios from 'axios'

function App(){

  const [userName , setUserName ]= useState('')
  const [images , setImages ]= useState('')
  const [loading , setLoading ]= useState(true)
  const [message , setMessage ]= useState('')


  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user', { username });
      setMessage(response.data.message);
      setImage(response.data.image);
    } catch (error) {
      console.error('Error:', error);
    }
  };
return(<>

<form onSubmit = {SubmitHandler}>
<input type="text" />
<button type='submit'>Lessss Goooooo</button>
</form>
</>)
}
export default App
