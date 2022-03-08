import axios from 'axios'
import { API_URL } from '@env'
import { createSlice } from '@reduxjs/toolkit'
export interface Comment {
  id: number
  userId: string
  createdAt: string
  body: string
  likes: number
}

const initialState = {
  comments: <Comment[]>[],
}

export const commentsSlicer = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    loadComments: (state, action) => {
      state.comments = action.payload
    },
  },
})

export const getCommentsByPostId = async (id: number) => {
  try {
    const res = await axios.get(`${API_URL}/post/${id}/comments`)
    const data = <Comment[]>res.data.data
    return data
  } catch (e) {
    return []
  }
}

export const { loadComments } = commentsSlicer.actions
export default commentsSlicer.reducer
