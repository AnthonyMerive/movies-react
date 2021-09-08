import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const URL = 'https://apialbum.herokuapp.com/usuario'

const StyldedContainer = styled.div`
        
display: flex;
justify-content: center;
margin: 10px;
padding: 15px;
color: #8d8f8f;
text-align: center;

img{
    margin: 10px 0;
    width: 80px;
}

input{
    margin:20px 0;
}

button{
    margin-bottom: 20px;
}
`



export default class Registro extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            usuarios: {
                id: '',
                apellido_paterno: '',
                apellido_materno: '',
                nombre: '',
                username: '',
                password: ''
            }
        }
    }

    registroUsuario = async () => {
        await axios.post(URL, {

            id: uuid,
            apellido_paterno: this.state.usuarios.apellido_paterno,
            apellido_materno: this.state.usuarios.apellido_materno,
            nombre: this.state.usuarios.nombre,
            username: this.state.usuarios.username,
            password: md5(this.state.usuarios.password)

        })

            .then(response => {

                alert('Usuario Registrado')

            })

            .catch(error => {

                console.log(error.message)

            })
    }

    handleSutmit = (e) => {
        e.preventDefault();
        this.registroUsuario();
    }

    handleChange = async (e) => {

        await this.setState({
            usuarios: {
                ...this.state.usuarios,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.usuarios)

    }

    render() {
        return (<>
        <StyldedContainer>

                <form className="form-signin" onSubmit={this.handleSutmit}>
                    
                        <img
                            src="https://res.cloudinary.com/df8qzqymf/image/upload/v1631055194/free-add-user-icon-302-thumb_fl3crp.png"
                            alt=""/>
                        <h3>Create New Account</h3>
                    
                        <input
                            type="text"
                            placeholder="First Last-name"
                            name="apellido_paterno"
                            className="form-control mt-4"
                            autoComplete="off"
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            placeholder="Second Last-name"
                            name="apellido_materno"
                            className="form-control mt-1"
                            autoComplete="off"
                            required=""
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="nombre"
                            className="form-control mt-1"
                            placeholder="Name"
                            required=""
                            onChange={this.handleChange}
                        />

                        <input
                            type="email"
                            name="username"
                            className="form-control mt-1"
                            placeholder="Email"
                            required=""
                            onChange={this.handleChange}
                        />

                        <input
                            type="Password"
                            name="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            required=""
                            onChange={this.handleChange}
                        />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-1"
                    >
                        Register
                    </button>
                    <br />
                    <br />
                    <Link
                        to="/login"
                        className="link"
                    >
                        Already registered?
                    </Link>
                </form>

        </StyldedContainer>
        </>)
    }
}
