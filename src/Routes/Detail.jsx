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
    <div className='detail-container'>
      <h1>Detail Dentist {user.id} </h1>
      <table>
        <tbody>
      <tr>
        <td>Name:</td>
        <td>Email:</td>
        <td>Phone:</td>
        <td>Website:</td>
      </tr>
      <tr>
        <td>{user.name}z</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
      </tr>
      </tbody>
    </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail