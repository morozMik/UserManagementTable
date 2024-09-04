import './App.css'
import Users from './components/Users';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from './app/slicers/saveUsers.slice';
import axios from 'axios';
import ReactLoading from 'react-loading';

function App() {
  const state = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
      // handle success
      dispatch(setUsers(response.data))
      setIsLoading(true)
    }).catch(function (error) {
      console.log(error);
    });
  },[])
  
  
  
  
  return (
    <div className='bg-gradient-to-r from-blue-300 to-blue-100 h-screen'>
      <h1 className='text-5xl text-center p-8 font-mono font-black'>User Management Table</h1>
      <div className='mx-auto w-fit mt-9 tracking-wide font-semibold'>
        {isLoading ? (
          <Users users={state} />
        ) : (
          <ReactLoading type={'spinningBubbles'} color={'black'} height={'20%'} width={'20%'} />
        )}
      </div>
    </div>
  )
}

export default App
