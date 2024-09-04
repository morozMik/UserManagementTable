import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { useState } from 'react';
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
  
  const [filter, setFilter] = useState({
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    username: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    phone: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  })
    
  return (
    <div className='bg-opacity-50 bg-slate-50'>
    
      <DataTable value={users} stripedRows dataKey="id" filters={filter} filterDisplay="row" emptyMessage="No customers found."
        globalFilterFields={['id','username', 'name', 'email', 'phone']} size='normal'>

        <Column field='id' header='ID ' sortable filter filterPlaceholder="Search by id" 
          className='border-b border-black p-2'/>
        <Column field='username' header='Username ' sortable filter filterPlaceholder="Search by name"
          className='border-b border-black'/>
        <Column field='name' header='Name ' sortable filter filterPlaceholder="Search by username" 
          className='border-b border-black'/>
        <Column field='email' header='Email ' sortable filter filterPlaceholder="Search by email"
          className='border-b border-black'/>
        <Column field='phone' header='Phone number ' sortable filter filterPlaceholder="Search by phone number"
          className='border-b border-black '/>

      </DataTable>
     
    </div>
  )
  
}

export default Users