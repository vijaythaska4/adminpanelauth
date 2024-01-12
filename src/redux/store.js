import { configureStore } from '@reduxjs/toolkit'
import AppState from "./appStateReduccer";
export default configureStore({
  reducer: {
     AppState
  },
})
