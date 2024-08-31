import { createSlice } from "@reduxjs/toolkit";

export interface UsersState {
  id: number,
  name: string, 
  username: string, 
  email: string,  
  phone: string
}

const initialState: UsersState[] = []

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, {payload: users}) => {
      return [...users];
    }
    
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer