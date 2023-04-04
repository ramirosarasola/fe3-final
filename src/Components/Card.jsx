import React, { useEffect, useState } from "react";
import doctor from '../assets/doctor.jpg'
import { Link } from 'react-router-dom';
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, show, renderFavs}) => {

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

    const index = favs.findIndex(fav => fav.id === id);
    if(index === -1){
      const updateFavs = [...favs, fav];
      setFavs(updateFavs);
      localStorage.setItem("favs", JSON.stringify(updateFavs));
    }
  }

  const removeFav = () => {
    const index = favs.findIndex(fav => fav.id === id);
    if (index !== -1) {
      const newFavs = [...favs];
      newFavs.splice(index, 1);
      setFavs(newFavs);
      localStorage.setItem("favs", JSON.stringify(newFavs));
      renderFavs(newFavs)
    }
  }


  return (

    <div className="card">
       <Link to={`/detail/${id}`}> <img src={doctor} alt="doctor-image"/> </Link>
       <h3>Name :{name}</h3>
        <p>Username: {username}</p>
       { ((favs.findIndex(fav => fav.id === id)) !== -1) && <p className="favorito">FAV</p>}
        {show && <button onClick={addFav} className="favButton">Add fav</button>}
        {!show && <button onClick={removeFav} className="favButton">Eliminar</button>} 
    </div>
  );
};

export default Card;
