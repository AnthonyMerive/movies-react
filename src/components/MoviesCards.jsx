import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledContainer = styled.div`

    .movieCard{
        list-style: none;
        font-size: 1.5rem;
    }

    .movieImg{
        border-radius: 10px;
        background-color: azure;
    }

    .movieImg:hover{
        transform: scale(1.02);
        opacity: 0.8;
    }

    .titulos{
        display: flex;
        justify-content: center;
        color: white;
    }

    .titulos p{
        font-size: 20px;
        margin-right: 0px;
        text-align: right;
        width: 150px;
        height: auto;
    }

`

export default function MoviesCards({ movie }) {

    const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path

    const v = movie.vote_average;

    return (<StyledContainer>

        <li className="movieCard">
            <Link to={"/details/" + movie.id}>
                <img width={230} height={345} className="movieImg" src={imgURL} alt={movie.title} />
            </Link>
            <div className="titulos">
                <span>{movie.title}</span>
                <p className={v >= 7 ? 'text-success' : 'text-danger'}>{movie.vote_average} {v >= 7 ? '✔️' : '❌'}</p>
            </div>
        </li>

    </StyledContainer>)
}
