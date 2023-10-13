import React from 'react'

function Usuarios({ users, selectUser }) {
    
    users.sort((a, b) => {
        if (a.first_name < b.first_name) return -1;
        if (a.first_name > b.first_name) return 1;
        return 0;
    });

    return (
        <section className='allUsers' >

            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <p>{user.first_name} {user.last_name}</p>
                            {/* <p>{user.email}</p> */}
                            <button onClick={() => selectUser(user.id)}>Seleccionar</button>
                        </div>)
                })
            }
        </section>
    )
}

export default Usuarios