import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    </div>
  )
}

export default Detail