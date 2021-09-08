import React from 'react'
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'

const StyledContainer = styled.div`

    .container{
        display: flex;
        justify-content: center;
        margin: 20px;
        padding: 15px;
        color: #8d8f8f;
        text-align: justify;
        flex-wrap: wrap;
    }

    .container img{
        margin: 20px;
        border-radius: 10px;
        background-color: azure;
    }

    .container strong{
        color: azure;
    }

    .titulo{
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
    }

    .buttons{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .back{
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        background-color: rgb(88, 88, 219);
        color: white;
        cursor: pointer;
    }

    .back:hover{
        transform: scale(1.05);
        opacity: 0.8;
    }

    .play{
        margin-left: 10px;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        background-color: rgb(211, 31, 8);
        color: white;
        cursor: pointer;
    }

    .play:hover{
        transform: scale(1.05);
        opacity: 0.8;
    }

    .col{
        max-width: 400px;
    }

`

export default function MovieDetails() {
        
    const { id } = useParams();
   
    const [pelicula, setPelicula] = useState(null);
    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/"+id, {

            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then(result => result.json())
        .then(data => setPelicula(data))
        
    },[id]); 

    if(!pelicula){
        return null
    }
    console.log(pelicula);
    const imgURL = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path
    
    return (<StyledContainer>
        
        <div className="container">

            <img src={imgURL} alt="{pelicula.title}" />

            <div className="col">
                <p className="titulo"><strong>{pelicula.title}</strong></p>
                <p><strong>Description:</strong> {pelicula.overview}</p>
                <p><strong>Genres:</strong> {pelicula.genres.map(gen => gen.name).join(", ")}</p>
                <p><strong>Release date:</strong> {pelicula.release_date}</p>
                <div className="buttons">
                <Link to="/"><button className="back"><strong>Go Back</strong></button></Link>
                <button className="play"><strong>▶ Play</strong></button>
                </div>
                </div>
        </div>
    </StyledContainer>)
}
