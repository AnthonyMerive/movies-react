import React, { useEffect } from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
import useQuery from '../Hoocs/useQuery'

export default function Search({setPage}) {

    const [search, setSearch] = useState('')
    const historial = useHistory();
    const query = useQuery();
    const busqueda = query.get('search');

    useEffect(() => {

        setSearch(busqueda || "");
  
    }, [busqueda])

    const handleChange = (e) => {
        setSearch(e.target.value);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPage(1);
        historial.push("/movies-react/?search=" + search)
    }

    return (
        <>
            <form className="d-flex" onSubmit={handleSubmit}>

                <input className="form-control me-2" 
                type="search" placeholder="Search Movie" 
                aria-label="Search" 
                value={search}
                onChange={handleChange}
                />

                <button className="btn btn-outline-primary" 
                type="submit"
                >Search</button> 

            </form>
        </>
    )
}
