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
      const newState:UsersState[] = users.map(user => {
        return {
          id: user.id,
          name: user.name, 
          username: user.username, 
          email: user.email,  
          phone: user.phone
        }
      })
      return [...newState];
    }
    
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer