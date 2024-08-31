import React from 'react'
import { UsersState } from '../app/slicers/saveUsers.slice'

type UsersProps = {
  users: {
    id: number,
    name: string, 
    username: string, 
    email: string,  
    phone: string
  }[];
}

function Users({users}:UsersProps) {
  
  const user = users[1]
  return (
    <div className='flex-row bg-slate-900 text-white p-4'>
      <div className='flex-1'>{user.name}</div>
      <div className='flex-1'>{user.username}</div>
      <div className='flex-1'>{user.email}</div>
      <div className='flex-1'>{user.phone}</div>
    </div>
  )
}

export default Users