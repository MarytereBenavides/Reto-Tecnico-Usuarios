import logo from './logo.svg';
import './App.css';
import {fetchUserData, userInformation} from './api/usersData';
import { useEffect, useState } from 'react';
import Usuarios from './pages/Usuarios';
import InfoUser from './pages/InfoUser';

function App() {
  const [users, setUsers] = useState([{}])
  const [userSelected, setuserSelected] = useState({})
  const [info, setInfo] = useState(false)
  const[loading, setLoading] = useState(false)

  function selectUser(id) {
    userInformation(id)
    .then((response) => {setuserSelected(response)
      setInfo(true) })

}
  useEffect(() => {
    fetchUserData()
      .then((response) => {setUsers(response)
        setLoading(true) })
  }, [])

  return (
    <div className="App">
    <h1>Usuarios</h1>
    <div className='sectionUsers'>
   {info===true ? <InfoUser userSelected={userSelected}></InfoUser> : (<></>)}
   {loading===true ? <Usuarios users={users} selectUser={selectUser}></Usuarios>: (<>Cargando</>)}
    </div>
    </div>
  );
}

export default App;
