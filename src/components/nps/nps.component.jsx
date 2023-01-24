import React from "react";
import logo from '../assets/logo.svg';
import {useState} from 'react';
import './nps.css';
import StarRating from "../starRating/starRating.component";
import axios from 'axios';
import Loading from "../loader/loader";
import Msg from "../msg/msg";

const url = "http://localhost:5000/coments"

function Nps() {
    const [name, setName] = useState('');
    const [coment, setComent] = useState('');
    const [star, setStar] = useState(0);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [mostraMsg, setMostraMsg] = useState(false);
    

    const HandleForm = (e) => {
        e.preventDefault();
    }
    const teste = () =>{
        setMostraMsg(true);
        setTimeout(() =>{ 
            window.location.reload();  
        },2000);             
    }

    const HandleStarChange = (value) => {
        setStar(value)
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleComentChange = (e) => {
        setComent(e.target.value);
    }
    const addNewComent = () => {
        if (name !== "" || star >= 1) {
            setRemoveLoading(true);
            setTimeout(() => {axios.post(url, {
                name: name,
                star: star,
                coment: coment,
            }).then(response => {
                setRemoveLoading(false);
                teste();
            })
            .catch(error => console.log(error))}, 2000 )    
        } else {
            alert("Selecione a quantidade de estrelas e digite seu nome para enviar uma avaliação")
        }

    }
    

    return (
        <div className='container'>
            {removeLoading && <Loading/>}
            {mostraMsg && <Msg/>}
            <div className="box">
                <img src={logo}
                    className="logo"
                    alt="logo"/>
                <p>
                    Conte o quanto está satisfeito com nossos serviços.
                </p>
                <h6 className="fullwidht pb-5">Marque de 1 à 5 estrelas</h6>

                <StarRating className="pb-5"
                    onChange={HandleStarChange}
                    required/>

                <form id="form"
                    onSubmit={
                        (e) => {
                            HandleForm(e)
                        }
                }>
                    <label className="left">Nome
                        <input className="block" type="text"
                            value={name}
                            onChange={
                                (e) => {
                                    handleChange(e)
                                }
                            }/>
                    </label>
                <label>Comentário (Opicional)
                    <input type="text"
                        value={coment}
                        onChange={
                            (e) => {
                                handleComentChange(e)
                            }
                        }/>

                </label>

            <button className="primary" type="submit"
                onClick={addNewComent}>Enviar Avaliação</button>
        </form>
    </div>
</div>
    );
}
 
export default Nps;
