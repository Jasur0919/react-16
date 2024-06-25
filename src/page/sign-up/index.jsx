import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {auth} from "@service"
import { SignUpModal } from '@modal';


const Index = () => {
  const [form, setForm] = useState({})
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
  
    try{
      const response = await auth.sign_up(form)
      if(response.status === 200){
        setOpen(true)
        // <ToastContainer />
      }
    }catch(error){
      console.log(error);
      // <ToastContainer />
    }
  }
  return (
    <>
    <SignUpModal open={open} handleClose={() => setOpen(false)}/>
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full sm:w-[600px] p-5" >
        <h1 className='text-center text-[40px] my-6'>Register</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <TextField type='email' fullWidth onChange={handleChange} label="Email" id="email" name='email' />
          <TextField type='text' fullWidth onChange={handleChange} label="Full Name" id="full_name" name='full_name' />
          <TextField type='password' fullWidth onChange={handleChange} label="Password" id="password" name='password' />
          <TextField type='text' fullWidth onChange={handleChange} label="Phone" id="phone" name='phone_number' />
          <Button variant='contained' type='submit'>Sign up</Button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Index