import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from './Search'
import MoviesList from './MoviesList'

const StyledEstrenos = styled.div`
    Font-size: 32px;
    color: white;
    text-align: center;
    margin-top: 20px;

`

const StyledImg = styled.img`
width: 35px;
margin: 10px 10px;
`
const StyledLogo = styled.img`
width: 80px;
`

const StyledSpan = styled.a`
cursor: pointer;
`
export default function Navbar() {

    const [most, setMost] = useState(false);
    const [all, setAll] = useState(true);

    const handleClickMost= () => {
        setMost(true)
        setAll(false)
    }

    const handleClickLeast= () => {
        setMost(false)
        setAll(false)
    }

    const handleClickAll = () => {
        setAll(true)
        setMost(false)
    }

    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link onClick={handleClickAll} to="/movies-react" className="navbar-brand text-danger" ><StyledLogo src="https://res.cloudinary.com/df8qzqymf/image/upload/v1631061604/movies-logo-psd-449406_iqoofs.png" alt="" srcset="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <StyledSpan onClick={handleClickMost} className="nav-link" aria-current="page">👍 Most voted</StyledSpan>
                        </li>
                        <li className="nav-item">
                            <StyledSpan onClick={handleClickLeast} className="nav-link">👎 Least voted</StyledSpan>
                        </li>
                        <li className="nav-item">
                            <StyledSpan onClick={handleClickAll} className="nav-link">All..</StyledSpan>
                        </li>
                    </ul>
                </div>
                <Link to="/movies-react/login"><StyledImg src="https://res.cloudinary.com/df8qzqymf/image/upload/v1631059145/Microsoft_Account_c4ealf.svg" alt="" srcset="" /></Link>
                    <Search/>
            </div>
        </nav>

        <StyledEstrenos>{
        all?'🎬 All Movies'
        :most?'👍 Most voted'
        :'👎 Least voted'
        }</StyledEstrenos>

        <MoviesList most={most} all={all} setAll={setAll}/>
        
    </>)
}
