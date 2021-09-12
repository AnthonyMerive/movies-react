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

export default function MoviesList({most, all, setAll, page}) {

    const [peliculas, setPeliculas] = useState([]);
    

    //aplicando Custom Hook de router dom
    const query = useQuery();
    const busqueda = query.get('search');

    useEffect(() => {
        setAll(true)
        const complemento = 
        busqueda ? `/search/movie?api_key=d35c832149972307bc3cb723c5d65bf7&query=${busqueda}&page=${page}`
        :`/discover/movie?api_key=d35c832149972307bc3cb723c5d65bf7&page=${page}` 

        fetch(`https://api.themoviedb.org/3${complemento}`)
            .then(result => result.json())
            .then(data => setPeliculas(data.results))

    }, [busqueda,setAll,page]);

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
