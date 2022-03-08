import axios from 'axios'
import { API_URL } from '@env'
import { createSlice } from '@reduxjs/toolkit'

export interface User {
  id: number
  createdAt: string
  username: string
  name: string
}

const initialState = {
  users: <User[]>[],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUsers(state, action) {
      state.users = action.payload
    },
  },
})

export const getUsers = async () => {
  try {
    const res = await axios.get(`${API_URL}/users`)
    const data = <User[]>res.data.data
    return data
  } catch (e) {
    return []
  }
}

export const { loadUsers } = usersSlice.actions
export default usersSlice.reducer
