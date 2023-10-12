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

  function selectUser(id) {
    console.log(id, 'id')
    userInformation(id)
    .then((response) => {setuserSelected(response)
      setInfo(true) })

}


  useEffect(() => {
    fetchUserData()
      .then((response) => setUsers(response))
  }, [])


  return (
    <div className="App">
    <h1>Usuarios</h1>
   {info===true ? <InfoUser userSelected={userSelected}></InfoUser> : (<></>)}
    <Usuarios users={users} selectUser={selectUser}></Usuarios>
    </div>
  );
}

export default App;
