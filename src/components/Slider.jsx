import React from 'react'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';


export default function Slider() {
    
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => { fetch('https://api.themoviedb.org/3/discover/movie?api_key=d35c832149972307bc3cb723c5d65bf7')
        .then(result => result.json())
        .then(data => setPeliculas(data.results))

    }, []);

    const imgURL = "https://image.tmdb.org/t/p/original"

    return (<>

        <Carousel fade interval={8000} className="m-1 justify-content-center">
            {peliculas.map(movie=>
                <Carousel.Item key={movie.id}>
                    <img fluid height={380}
                        className="justify-content-center d-felx w-100"
                        src={imgURL+movie.backdrop_path}
                        alt="imagen"
                    />
                    <Carousel.Caption>

                        <h3 className="text-white bg-dark">{movie.title}</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>

    </>)
}
