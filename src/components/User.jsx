import React from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const StyldedContainer = styled.div`
        
display: flex;
justify-content: center;
color: #8d8f8f;
text-align: center;
padding-top: 20px;

img{
    width: 60px;
}

button{
    margin-bottom: 20px;
}

`
const handleCerrarSesion = () => {
    localStorage.removeItem('usuario');

    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        background: 'hsla(0, 0%, 0%, 0.856)'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Goodbye!',
                showConfirmButton: false,
                timer: 1500,
                background: 'hsla(0, 0%, 0%, 0.856)',
            })
            window.location.reload();
        }
    })

}

export default function User({ usuario }) {
    return (<StyldedContainer>
        <div>

            <img
                className="mt-5"
                src="https://res.cloudinary.com/df8qzqymf/image/upload/v1631054459/user-line-logo-2007C82021-seeklogo.com_zyomqc.png"
                alt="" />

            <h4 className="mt-2">{usuario}</h4>

            {usuario === 'admin@admin.com' ?
            <h5 className="mt-5">You're the admin</h5>
            :
            ''
            }  

            {usuario === 'admin@admin.com' ?
                <Link to="/movies-react/admin" className="btn btn-success btn-success m-2">
                        🔰 Admin page
                </Link>
                :
                ''
            }
             <br />
            <button
                onClick={handleCerrarSesion}
                className="btn btn-danger btn-block"
            >
                Sing off
            </button>



        </div>
    </StyldedContainer>)
}
