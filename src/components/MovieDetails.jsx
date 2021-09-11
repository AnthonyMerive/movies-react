import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
// import Trailer from './Trailer'
import Swal from 'sweetalert2'

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

    .trailer{
        display: flex;
        justify-content: center;
    }

`

export default function MovieDetails() {

    const { id } = useParams();

    const [pelicula, setPelicula] = useState(null);
    const [trailer, setTrailer] = useState([]);
    // const [mostrar, setMostrar] = useState(false);
    let urlBusqueda = localStorage.getItem('historial')

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + id, {

            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(result => result.json())
            .then(data => setPelicula(data))

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {

            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(res => res.json())
            .then(dat => setTrailer(dat.results))

    }, [id]);

    if (!pelicula) {
        return null
    }

    if (!trailer) {
        return []
    }

    let url = ''

    if(trailer.length > 0 ){
    url = `https://www.youtube.com/embed/${trailer[0].key}?controls=0;rel=0&amp;autoplay=1`
    } 
       
    const handleMostrar = () => {
        Swal.fire({
            title: `<h2 style="color: white">${pelicula.title}</h2> Official Trailer`,
            html:
            `<iframe width="450" height="300" src=${url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`,
            confirmButtonText: 'Go Back',
            background: 'hsla(0, 0%, 0%, 0.856)',
          })
        // setMostrar(true);
    }
    const imgURL = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path

    return (<StyledContainer>

        <div className="container">

            <img src={imgURL} alt="{pelicula.title}" />

            <div className="col">
                <p className="titulo"><strong>{pelicula.title}</strong></p>
                <p><strong>Description: </strong>
                {pelicula.overview === ''?
                <span>No description in the server</span>
                :<span>{pelicula.overview}</span>
                 }</p>
                <p><strong>Genres:</strong> {pelicula.genres.map(gen => gen.name).join(", ")}</p>
                <p><strong>Release date:</strong> {pelicula.release_date}</p>
                <div className="buttons">
                    <Link to={urlBusqueda ===null?'/movies-react':`/movies-react/${urlBusqueda}`}><button className="back"><strong>Go Back</strong></button></Link>
                    {trailer.length === 0 ?
                        <button type="button" className="btn btn-secondary  ms-2" disabled><strong>▶ Trailer</strong></button>
                        :
                        <button onClick={handleMostrar} className="play"><strong>▶ Trailer</strong></button>
                    }
                </div>

            </div>
            
        </div>

        {/* <div className="trailer">
            {mostrar ?
                <Trailer trailer={trailer} />
                : ''
            }
        </div>          */}
    </StyledContainer>)
}
