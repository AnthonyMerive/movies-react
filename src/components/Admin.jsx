import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Swal from 'sweetalert2'
import axios from 'axios'
// import AdminEdit from './AdminEdit'

const StyldedContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    form{
        margin-top: 50px;
    }
    span{
        cursor: pointer;
    }

    span:hover{
        transform: scale(1.1);
        opacity: 0.8;
    }

    img{
        width: 60px;
    }
    
    input{
        margin:20px 0;
        text-align: center;
        // width: 200px;
    }
    
    button{
        margin-bottom: 20px;
    }
`

export default function Admin() {

    const [usuarios, setUsuarios] = useState([]);
    const [id, setId] = useState(null);
    const [modificar, setModificar] = useState(null);
    const [values, setValues] = useState({
        "apellido_paterno": "",
        "apellido_materno": "",
        "nombre": "",
        "password": "",
        "username": ""
    })

    const { apellido_paterno, apellido_materno, nombre, username } = values

    useEffect(() => {
        setId(null)
        peticionGet();
    }, [id])

    const peticionGet = () => {
        fetch('https://apialbum.herokuapp.com/usuario')
            .then(result => result.json())
            .then(data => setUsuarios(data))
    }

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure delete the user?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            background: 'hsla(0, 0%, 0%, 0.856)',
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://apialbum.herokuapp.com/usuario/' + id, {
                    method: 'DELETE',
                })
                setId(id)
                setModificar(null)
                setValues({
                    "id": "",
                    "nombre": "",
                    "descripcion": "",
                    "precio": "",
                    "imagen": ""
                })
                Swal.fire({
                    title: 'User deleted!',
                    icon: 'success',
                    background: 'hsla(0, 0%, 0%, 0.856)'
                })
            }
        })
    }

    const handleModify = (id) => {
        const array = usuarios.find(product => product.id === id)
        setModificar(array)
        setValues({
            "apellido_paterno": array.apellido_paterno,
            "apellido_materno": array.apellido_materno,
            "nombre": array.nombre,
            "password": array.password,
            "username": array.username
        })

    }

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        })
        console.log(values)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put('https://apialbum.herokuapp.com/usuario/' + modificar.id, values)
            .then(response => {
                console.log(response);
                peticionGet();
            })
            .catch(error => {
                console.log(error.message)
            })
        setModificar(null);
        setValues({
            "apellido_paterno": "",
            "apellido_materno": "",
            "nombre": "",
            "password": "",
            "username": ""
        })

    }

    const handleVolver = () => {
        setModificar(null)
        setValues({
            "id": "",
            "nombre": "",
            "descripcion": "",
            "precio": "",
            "imagen": ""
        })
    }


    return (<StyldedContainer>

        <div className="container m-5">
            <h2 className="d-flex justify-content-center m-5 text-light">User | CRUD</h2>
            <ol className="list-group list-group-numbered">
                {usuarios.length === 0 ?
                    <h2 className="d-flex justify-content-center">-No users data-</h2>
                    :
                    usuarios.map(user =>
                        <li key={user.id} className="list-group-item d-flex justify-content-between align-items-start bg-dark mt-2">
                            <div className="ms-2 me-auto text-light">
                                <div className="fw-bold text-light">{user.username}</div>
                                {user.nombre} {user.apellido_paterno} {user.apellido_materno}
                            </div>
                            {
                                user.username === 'admin@admin.com' ?
                                    <span className="badge bg-dark">Admin</span>
                                    :
                                    <div>
                                        <span onClick={() => handleModify(user.id)} className="badge bg-warning">Modify</span>
                                        <span onClick={() => handleDelete(user.id)} className="badge bg-danger ms-1">Delete</span>
                                    </div>
                            }
                        </li>
                    )

                }
            </ol>

            <div className="d-flex justify-content-end">
                <Link to="/movies-react" type="button" className="btn btn-outline-primary m-3">Exit</Link>
            </div>

            {modificar !== null &&
                <form className="form-signin container text-center">

                    <h3 className="text-light mb-5">Edit User</h3>
                    <div>
                        <input
                            type="text"
                            name="nombre"
                            className="form-control mt-1"
                            placeholder="User"
                            value={username}
                            required=""
                            onChange={handleChange}
                            disabled
                        />

                        <input
                            type="text"
                            name="nombre"
                            className="form-control mt-1"
                            placeholder="Name"
                            value={nombre}
                            required=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="First Lastname"
                            name="apellido_paterno"
                            className="form-control mt-4"
                            value={apellido_paterno}
                            autoComplete="off"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            placeholder="Second Lastname"
                            name="apellido_materno"
                            className="form-control mt-1"
                            autoComplete="off"
                            value={apellido_materno}
                            required=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button
                            className="btn btn-danger btn-block me-1"
                            onClick={handleVolver}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-primary btn-block"
                            onClick={handleSubmit}
                        >
                            Edit
                        </button>
                    </div>

                </form>
            }

        </div>


    </StyldedContainer>)
}
