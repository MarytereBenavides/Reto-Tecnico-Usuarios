import React from 'react'

function Usuarios({ users, selectUser }) {


    return (
        <section className='allUsers'>
           
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <p>{user.first_name} {user.last_name}</p>
                            <p>{user.email}</p>
                            <button onClick={() => selectUser(user.id)}>Seleccionar</button>
                        </div>)
                })
            }
        </section>
    )
}

export default Usuarios