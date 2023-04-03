import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    website:'',
  })
  const {id} = useParams()
  useEffect(()=>{
    const dataUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.json()
      setUser(data)
    } 
    dataUser()
  },[id])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
      <h1>Detail Dentist id </h1>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.website}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail