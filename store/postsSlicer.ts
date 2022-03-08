import axios from 'axios'
import { API_URL } from '@env'
import { createSlice } from '@reduxjs/toolkit'

export interface Post {
  id: number
  sub: string
  userId: string
  createdAt: string
  title: string
  body: string | null
  likes: number
  comments: number[]
  awards: number
  imgUrl: string | null
}

const initialState = {
  posts: <Post[]>[],
}

export const postsSlicer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts(state, action) {
      state.posts = action.payload
    },
  },
})

export const getPosts = async () => {
  try {
    const res = await axios.get(`${API_URL}/posts`)
    const data = <Post[]>res.data.data
    return data
  } catch (e) {
    return []
  }
}

export const { loadPosts } = postsSlicer.actions
export default postsSlicer.reducer
