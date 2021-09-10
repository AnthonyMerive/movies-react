import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from './MoviesCards'
import styled from 'styled-components'
import useQuery from '../Hoocs/useQuery'

const StyledContainer = styled.div`

    .movieGrid{
        display: grid;
        grid-template-columns: repeat(auto-fill, 230px);
        gap: 40px;
        padding: 40px;
        justify-content: center;
    }
`

export default function MoviesList({most, all, setAll}) {

    const [peliculas, setPeliculas] = useState([]);
    

    //aplicando Custom Hook de router dom
    const query = useQuery();
    const busqueda = query.get('search');

    useEffect(() => {
        setAll(true)
        const complemento = 
        busqueda ? `/search/movie?query=${busqueda}`
        :'/discover/movie' 

        fetch(`https://api.themoviedb.org/3${complemento}`, {

            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzVjODMyMTQ5OTcyMzA3YmMzY2I3MjNjNWQ2NWJmNyIsInN1YiI6IjYxMzUwN2VmMGI1ZmQ2MDA4ODc1NmIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3MHlpc-jN7rwbAduamFy8U76V9e1bfCvUcZut5Clkso",
                    "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(result => result.json())
            .then(data => setPeliculas(data.results))

    }, [busqueda,setAll]);
 
    let mostFilter = peliculas.filter(peli => peli.vote_average >= 7)
    let leastFilter = peliculas.filter(peli => peli.vote_average < 7)

    return (<StyledContainer>

            <ul className="movieGrid">
                
                {all?
                peliculas.map(movie =>
                    <MovieCard key={movie.id} movie={movie} />
                ):most?mostFilter.map(movie =>
                    <MovieCard key={movie.id} movie={movie} />
                ):
                leastFilter.map(movie =>
                    <MovieCard key={movie.id} movie={movie} />
                )
                }

            </ul>

        </StyledContainer>)
}
