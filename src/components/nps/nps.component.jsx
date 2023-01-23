import React from "react";
import logo from '../assets/logo.svg';
import { useState } from 'react';
import './nps.css';
import StarRating from "../starRating/starRating.component";


function log(value) {
    console.log(value);
  }
const HandleForm = (event) =>{
    event.preventDefault()
}
function Nps(){

    const [name, setName] = useState("")
    const [coment, setComent] = useState("")
    

    return <div className='container'>
        <div className="box">
            <img src={logo} className="logo" alt="logo" />
            <p>
                Conte o quanto está satisfeito com nossos serviços.
            </p>
            <h6 className="fullwidht pb-5">Marque de 1 à 5 estrelas</h6>
            <StarRating className="pb-5" onChange={log} required />
            <form onSubmit={HandleForm}>
                <label className="left">Nome
                    <input
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block" />
                </label>
                <label>Comentário (Opicional)
                    <input
                    type="text" 
                    value={coment}
                    onChange={(e) => setComent(e.target.value)}
                    />
                </label>
                <button className="primary" type="submit">Enviar Avaliação</button>
            </form>
        </div>
    </div>
}

export default Nps;