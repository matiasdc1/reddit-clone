import commentsSlicer from './commentsSlicer'
import postsSlicer from './postsSlicer'
import usersSlice from './usersSlicer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    comments: commentsSlicer,
    posts: postsSlicer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
