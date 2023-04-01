import React, { useState } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    website:'',
  })
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `/dentist/:id` 
  const dataUser = async () => {
    const response = await fetch(url)
    // const data = await setUser(user)
  
  } 
    
  

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail