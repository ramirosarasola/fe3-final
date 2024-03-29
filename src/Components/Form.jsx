import React from "react";
import { useState, useReducer } from "react";

const Form = () => {
  const [show, setShow] = useState("");
  const [dentist, setDentist] = useState({
    name: '',
    email:'', 
  })
  const handleChange = (event) =>{
    setDentist({...dentist, [event.target.name] : event.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailValidation = emailRegex.test(dentist.email);
    console.log(dentist)

    return (emailValidation && dentist.name.length > 5 )
    ? 
    setShow(`Gracias ${dentist.name}, te contactaremos cuando antes vía mail`) 
    :
    setShow(`Por favor verifique su información nuevamente`)
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} >
          <label >Full Name: </label>
          <input type="text" placeholder="John Doe" value={dentist.name} name="name" onChange={handleChange} />
          <label >Email: </label>
          <input type="email" placeholder="johndoe@gmail.com" value={dentist.email} name="email" onChange={handleChange} />
          <button>Send</button>
        </form>
        <p>{show}</p>
      </div>
    </>
  )



};

export default Form;
