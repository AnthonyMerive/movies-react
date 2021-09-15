import React from 'react'
import axios from 'axios'

export default function EditAdmin(props) {

    const { username, nombre, apellido_materno, apellido_paterno } = props.values

    const handleChange = ({ target }) => {
        props.setValues({
            ...props.values,
            [target.name]: target.value,
        })
        // console.log(values)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put('https://apialbum.herokuapp.com/usuario/' + props.modificar.id, props.values)
            .then(response => {
                console.log(response);
                props.setControl(true);
            })
            .catch(error => {
                console.log(error.message)
            })
        props.setModificar(null);
        props.setValues({
            "apellido_paterno": "",
            "apellido_materno": "",
            "nombre": "",
            "password": "",
            "username": ""
        })

    }

    const handleVolver = () => {
        props.setModificar(null)
        props.setValues({
            "id": "",
            "nombre": "",
            "descripcion": "",
            "precio": "",
            "imagen": ""
        })
    }

    return (<>

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

    </>)
}
