
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {auth} from "@service"
// import { SignUpModal } from '@modal';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate()
  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(form);
    try{
      const response = await auth.sign_in(form)
      if(response.status === 200){
        localStorage.setItem("access_token",response?.data?.access_token)
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full sm:w-[600px] p-5" >
        <h1 className='text-center text-[40px] my-6'>Login</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <TextField type='email' fullWidth onChange={handleChange} label="Email" id="email" name='email' />
          <TextField type='password' fullWidth onChange={handleChange} label="Password" id="password" name='password' />
          <Button variant='contained' type='submit'>Sign in</Button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Index