import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from "primereact/passthrough/tailwind";
import { usePassThrough } from 'primereact/passthrough';
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
  const CustomTailwind = 
    {
      datatable: {
            thead: {
                className: 'bg-opacity-30'
            }
        }
    }
    
  return (
    <>
    <PrimeReactProvider value={{ unstyled: true, pt: CustomTailwind }}>
      <DataTable value={users} stripedRows dataKey="id" filters={filter} filterDisplay="row" emptyMessage="No customers found."
        globalFilterFields={['id','username', 'name', 'email', 'phone']} size='normal'
        // pt={{
        //   thead: ({ state }) => ({
        //       id: 'dataTableThead',
        //       style: {
        //           'user-select': 'none'
        //       },
        //       className: classNames('border-primary', {
        //           'bg-primary': state.collapsed,
        //           'bg-primary-reverse': !state.collapsed
        //       })
        //   }),}}
        >

        <Column field='id' header='ID' sortable filter filterPlaceholder="Search by id" 
          className='border-b border-black p-2'/>
        <Column field='username' header='Username' sortable filter filterPlaceholder="Search by name"
          className='border-b border-black'/>
        <Column field='name' header='Name' sortable filter filterPlaceholder="Search by username" 
          className='border-b border-black'/>
        <Column field='email' header='Email' sortable filter filterPlaceholder="Search by email"
          className='border-b border-black'/>
        <Column field='phone' header='Phone number' sortable filter filterPlaceholder="Search by phone number"
          className='border-b border-black '/>

      </DataTable>
     </PrimeReactProvider>
    </>
  )
  
}

export default Users