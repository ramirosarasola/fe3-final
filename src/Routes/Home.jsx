import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [userList, setUserList] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    async function fetchDataAsync() {
      const response = await fetch(url);
      const data = await response.json();
      setUserList(data);
    }
    fetchDataAsync();
  }, []);

  console.log(userList);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>

        {userList.map( (user) => {
          return(
            <Card key={user.id} name={user.name} username={user.username} id={user.id} show={true}/>
          )
        })}

      </div>
    </main>
  )
}

export default Home