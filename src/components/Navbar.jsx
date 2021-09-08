import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledImg = styled.img`
width: 35px;
margin-right: 10px;
`
const StyledLogo = styled.img`
width: 80px;
`
export default function Navbar() {
    return (<>
                        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-danger" ><StyledLogo src="https://res.cloudinary.com/df8qzqymf/image/upload/v1631061604/movies-logo-psd-449406_iqoofs.png" alt="" srcset="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/mostvoted" className="nav-link" aria-current="page">👍 Most voted</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/leastvoted" className="nav-link">👎 Least voted</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                    <Link to="/login"><StyledImg src="https://res.cloudinary.com/df8qzqymf/image/upload/v1631059145/Microsoft_Account_c4ealf.svg" alt="" srcset="" /></Link>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        </>)
}
