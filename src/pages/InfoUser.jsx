import React from 'react'

function InfoUser({ userSelected }) {


    return (
        <div className='infoUser'>
            <h2>Información del usuario seleccionado</h2>
            <div className='userInformation'>
                <img src={userSelected.avatar} alt="Avatar de usuario"></img>
                <div className='dataUser'>
                    <p>Nombre: {userSelected.first_name}</p>
                    <p>Apellido: {userSelected.last_name}</p>
                    <p>email: {userSelected.email}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoUser