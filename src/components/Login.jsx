import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const URL = 'https://apialbum.herokuapp.com/usuario'

const StyldedContainer = styled.div`
        
display: flex;
justify-content: center;
margin: 50px;
padding: 15px;
color: #8d8f8f;
text-align: center;
flex-wrap: wrap;

input{
    margin:20px 0;
}

img{
    margin: 10px 0;
    width: 100px;
}

button{
    margin-bottom: 20px;
}
`

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            usuarios: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = async e => {
        await this.setState({
            usuarios: {
                ...this.state.usuarios,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.usuarios) //imprimir todo el estado 
    }

    iniciarSesion = async () => {

        await axios.get(URL, {
            params: {
                username: this.state.usuarios.username,
                password: md5(this.state.usuarios.password)
            }
        }
        )

            .then(response => {

                return response.data;

            })

            .then(response => {

                if (response.length) {

                    const respuesta = response[0];
                    alert(`Welcome ${respuesta.nombre} ${respuesta.apellido_paterno}`)

                } else {
                    alert('The username or password  is incorrect');
                }

            })

            .catch(error => {

                console.log(error);

            })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.iniciarSesion()
    }

 
    render() {
        
       
        return (<>
        
            <StyldedContainer>

                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1631054459/user-line-logo-2007C82021-seeklogo.com_zyomqc.png" alt="" />
                    <h1 className="h4 mb-3 font-weight-normal">
                        Sign in
                    </h1>

                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control mt-1"
                        placeholder="Email"
                        required=""
                        name="username"
                        onChange={this.handleChange}
                    />

                    <input
                        type="Password"
                        id="inputPassword"
                        className="form-control mt-1"
                        placeholder="Password"
                        required=""
                        name="password"
                        onChange={this.handleChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    // onChange={this.iniciarSesion()}
                    >
                        Login
                    </button>

                    <div className="">
                    <Link
                        to="/register"
                        className="Link"
                    >
                        Create new account
                    </Link>
                    </div>
                    
                </form>

            </StyldedContainer>
        </>)
    }
}
