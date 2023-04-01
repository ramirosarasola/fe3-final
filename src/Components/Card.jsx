import React, { Component, useEffect, useState } from "react";
import doctor from '../assets/doctor.jpg'
import { Link } from 'react-router-dom';
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, show}) => {

  const {favs, setFavs} = useContextGlobal()

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs"));
    if (storedFavs) {
      setFavs(storedFavs);
    }
  }, []);
  
  const addFav = () => {
    const fav = {
      'id': id,
      'name': name,
      'username': username,
    }
  
    const updateFavs = [...favs, fav];
    setFavs(updateFavs);
    localStorage.setItem("favs", JSON.stringify(updateFavs));
  }

  const removeFav = () => {
    const index = favs.findIndex(fav => fav.id === id);
    if (index !== -1) {
      const newFavs = [...favs];
      newFavs.splice(index, 1);
      setFavs(newFavs);
      localStorage.setItem("favs", JSON.stringify(newFavs));
    }
  }
  


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${id}`}> <img src={doctor} alt="doctor-image"/></Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <h3>Name :{name}</h3>
        <p>Username: {username}</p>


        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        {show
        &&
          <button onClick={addFav} className="favButton">Add fav</button>
        }

        {!show 
        && 
        <button onClick={removeFav} className="favButton">Eliminar</button>
        }
        
    </div>
  );
};

export default Card;