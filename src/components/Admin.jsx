import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Swal from 'sweetalert2'

const StyldedContainer = styled.div`
    display: flex;
    justify-content: center;

    span{
        cursor: pointer;
    }

    span:hover{
        transform: scale(1.1);
        opacity: 0.8;
    }
`

export default function Admin() {

    const [usuarios, setUsuarios] = useState([]);
    const [id, setId] = useState(null);

    useEffect(() => {
        setId(null)
        fetch('https://apialbum.herokuapp.com/usuario')
            .then(result => result.json())
            .then(data => setUsuarios(data))

    }, [id])

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
                setId(id);
                Swal.fire({
                    title: 'User deleted!',
                    icon: 'success',
                    background: 'hsla(0, 0%, 0%, 0.856)'
                })
            }
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
                            user.username === 'admin@admin.com'?
                            <span className="badge bg-dark">Admin</span>
                            :
                            <span onClick={() => handleDelete(user.id)} className="badge bg-danger">Delete</span>
                            }
                        </li>
                    )

                }
            </ol>
            <div className="d-flex justify-content-end">
                <Link to="/movies-react" type="button" className="btn btn-outline-primary m-3">Exit</Link>
            </div>
        </div>


    </StyldedContainer>)
}
