import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from './Search'
import MoviesList from './MoviesList'
import Slider from './Slider'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Login from './Login'
import Register from './Register'
import User from './User'

const StyledEstrenos = styled.div`
    Font-size: 32px;
    color: white;
    text-align: center;
    margin-top: 20px;

`

const StyledImg = styled.img`
    width: 35px;
    margin: 10px 10px;
    cursor: pointer;
`
const StyledLogo = styled.img`
    width: 80px;
`

const StyledSpan = styled.a`
    cursor: pointer;
`
const StyledPagination = styled.div`
    display: flex;
    justify-content: center;

`

export default function Navbar() {

    const [page, setPage] = useState(1);
    const [most, setMost] = useState(false);
    const [all, setAll] = useState(true);
    const [show, setShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const usuario = localStorage.getItem('usuario');

    const handleClickMost = () => {
        setMost(true)
        setAll(false)
    }

    const handleClickLeast = () => {
        setMost(false)
        setAll(false)
    }

    const handleClickAll = () => {
        setAll(true)
        setMost(false)
        setPage(1)
    }


    const handlePrevPage = async (e) => {
        e.stopPropagation()

        setPage(page - 1)

        console.log(page)

    }

    const handleNextPage = async (e) => {
        e.stopPropagation()

        setPage(page + 1)

        console.log(page)

    }

    const handleShow = () => {
        setShow(true)
        setShowRegister(false)
    }

    const handleClose = () => setShow(false);

    const handleShowRegister = () => {
        setShowRegister(true)
        setShow(false)
    }
    
    const handleCloseRegister = () => setShowRegister(false);

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
                
                {usuario === null ?
                    <button
                        onClick=
                        {showRegister ?
                            handleCloseRegister
                            : handleShowRegister}
                        className="btn btn-outline-warning me-1">Register</button>
                    :
                    ''
                }

                {usuario === null ?
                    <StyledImg className="ms-1" onClick={handleShow} src="https://res.cloudinary.com/df8qzqymf/image/upload/v1631059145/Microsoft_Account_c4ealf.svg" alt="" srcset="" />
                    :
                    <button onClick={handleShow} className="btn btn-outline-secondary text-light mb-3">{usuario}</button>
                }

            </div>
                <Search setPage={setPage} />
                
            </div>
        </nav>

        <Slider />

        <StyledEstrenos>{
            all ? '🎬 All Movies'
                : most ? '👍 Most voted'
                    : '👎 Least voted'
        }</StyledEstrenos>

        <StyledPagination className="mt-5">
            {page >= 2 ?
                <button className="btn btn-outline-secondary m-3" onClick={handlePrevPage}>◀ previous</button>
                :
                ''
            }

            <h3 className="text-light m-3">{page}</h3>

            <button className="btn btn-outline-secondary m-3" onClick={handleNextPage}>next ▶</button>
        </StyledPagination>

        <MoviesList most={most} all={all} setAll={setAll} page={page} />

        <StyledPagination>
            {page >= 2 ?
                <button className="btn btn-outline-secondary m-3" onClick={handlePrevPage}>◀ previous</button>
                :
                ''
            }

            <h3 className="text-light m-3">{page}</h3>

            <button className="btn btn-outline-secondary m-3" onClick={handleNextPage}>next ▶</button>
        </StyledPagination>

        <Offcanvas className="bg-dark" placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
                {usuario === null ?
                    <Login />
                    :
                    <User usuario={usuario} />
                }

            </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas className="bg-dark" placement="start" show={showRegister} onHide={handleCloseRegister}>
            <Offcanvas.Header closeButton />

            <Offcanvas.Body>
                <Register />
            </Offcanvas.Body>
        </Offcanvas>
    </>)
}
