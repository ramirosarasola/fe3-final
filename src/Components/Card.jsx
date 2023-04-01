import React, { useEffect, useState } from "react";
import doctor from '../assets/doctor.jpg'
import { Link } from 'react-router-dom';
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const {favs, setFavs} = useContextGlobal()
  // const [asd, setasd] = useState([])
  const [n, setN] = useState(0)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const fav ={
      'id': id,
      'name': name,
      'username': username,
    }

        
    const storedFavs = JSON.parse(localStorage.getItem('favs'));
    const updateFavs = [...storedFavs, fav];
    setFavs(updateFavs);
    setN(n+1);
    // setasd(favs)
  }
  useEffect(() => {
    if(favs.length ){
      localStorage.setItem('favs', JSON.stringify(favs));
    }    
  },[favs]);
  
  // console.log(storedFavs);





  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${id}`}> <img src={doctor} alt="doctor-image"/></Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <h3>Name :{name}</h3>
        <p>Username: {username}</p>


        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;