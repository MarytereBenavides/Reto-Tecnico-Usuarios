import React from 'react'

function InfoUser({ userSelected }) {


    return (
        <div className='infoUser'>
            <h2>Información</h2>
            <div className='userInformation' key={userSelected.avatar}>
                <img src={userSelected.avatar} alt="Avatar de usuario"></img>
                <div className='dataUser'>
                    <p key={userSelected.first_name}><b>Nombre:</b><br />{userSelected.first_name}</p>
                    <p key={userSelected.last_name}><b>Apellido:</b><br /> {userSelected.last_name}</p>
                    <p key={userSelected.email}><b>Email: </b><br />{userSelected.email}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoUser