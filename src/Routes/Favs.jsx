import React, { useEffect, useReducer, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  // const initialState = []

  // const [state , dispatch] = useReducer(reducer, initialState)

  const [destacados, setDestacados] = useState([]);

  useEffect(() => {
    setDestacados(
      [...destacados, ...JSON.parse(localStorage.getItem('favs'))]
    )
    
  },[])
  
  console.log(destacados);
  


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid"> 
        {/* este componente debe consumir los destacados del localStorage */}
        

        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
