
import { Link, useParams } from 'react-router-dom';
import "./City.css";
import Header from "../../header/Header.jsx";
import Footer from "../../footer/Footer.jsx";

import data from "../../../data/db.json";

export default function City(){

    let param = useParams();
    let id = param.id;
    let city;
    
    for(let e of data){
        if(e.id === id){
            city = e;
            break;
        }
    }

    return (
        <>
        <Header />
        <div>
            <h1>Name: {city.name}</h1>
            <h3>Price: {city.price}</h3>
            <p>Info: {city.info}</p>
            <img src={city.image} alt="" />
        </div>
        <Footer />
        </>
    )
}