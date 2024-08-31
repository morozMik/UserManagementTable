import './App.css'
import Users from './components/Users';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from './app/slicers/saveUsers.slice';
import axios from 'axios';

function App() {
  const rootState = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
      // handle success
      dispatch(setUsers(response.data))
    })
  },[])
  
  const state:UsersState[] = rootState.map(user => {
    return {
      id: user.id,
      name: user.name, 
      username: user.username, 
      email: user.email,  
      phone: user.phone
    }
  })
  
  
  
  return (
    <>
      <h1 className='text-5xl text-left'>User Management Table:</h1>
      <Users users={state}/>
    </>
  )
}

export default App
