import { configureStore } from '@reduxjs/toolkit'

import quizSlice from './slices/quizSlice'

export const store = configureStore({
  reducer: {quiz : quizSlice},
})