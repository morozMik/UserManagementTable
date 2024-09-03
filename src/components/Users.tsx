import React from 'react'
import { useState } from 'react'

type UsersProps = {
  users: {
    id: number,
    name: string, 
    username: string, 
    email: string,  
    phone: string
  }[];
}
type UserProps = {
  user: {
    id: number,
    name: string, 
    username: string, 
    email: string,  
    phone: string
  }
}

function Users({users}:UsersProps) {
  

  const renderUsers = users.map(user => {
    return (
      <User user={user}/>
    )
  })

  
  function User({user}:UserProps){
    const [accordionOpen, setAccordionOpen] = useState(false); 

    return (
      <div className='bg-slate-900 text-white p-4 my-6 w-1/2'>
        <div className='flex justify-between'>
          <div className=''>{user.username}</div>
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className=''>
              Show more 
          </button>
        </div>
        <div className={`transition-all duration-300 ease-in-out text-white text-sm ${
          accordionOpen
            ? ``
            : "hidden"
        }`}id="collapse" data-twe-collapse-item>
          <div className='flex-1 w-fit'>Name: {user.name}</div>
          <div className='flex-1 w-fit'>Email: {user.email}</div>
          <div className='flex-1 w-fit'>Phone number: {user.phone}</div>
        </div>
      </div>
    )
  }
  return (
    <>
     {renderUsers}
    </>
  )
  
}

export default Users