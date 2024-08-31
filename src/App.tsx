import './App.css'
import axios from 'axios';
import Users from './components/Users';

axios.get('https://jsonplaceholder.typicode.com/users/1').then(function (response) {
  // handle success
  console.log(response);
})


function App() {

  return (
    <>
      <h1 className='text-5xl text-left'>User Management Table:</h1>
      <Users/>
    </>
  )
}

export default App
