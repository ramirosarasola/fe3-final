import React, { useEffect, useReducer, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [destacados, setDestacados] = useState([]);
  
  const handleRenderFavs = (newFavs) =>{
    setDestacados(newFavs)
  }

  const resetFavs = () => {
    localStorage.setItem("favs", JSON.stringify([]))
    setDestacados([])
  }
  

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('favs'))){
      setDestacados(
        JSON.parse(localStorage.getItem('favs'))
      )
    }
    
  },[])
  
  console.log(destacados);

  return (
    <>
      <h1>Dentists Favs</h1>
      <button onClick={resetFavs}>Resetear Favs</button>
      <div className="card-grid"> 
        {/* este componente debe consumir los destacados del localStorage */}
        {destacados.map((fav, index) =>{
          return(
            <Card key={index} name={fav.name} username={fav.username} id={fav.id} show={false} renderFavs={handleRenderFavs}/>
          )
        })}
        
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
