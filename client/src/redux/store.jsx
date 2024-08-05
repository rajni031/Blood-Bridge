import {configureStore} from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import { bloodRequestSlice } from './features/bloodRequest/bloodRequestSlice'
const store =configureStore({
    reducer:{
        auth:authSlice.reducer,
        bloodRequest: bloodRequestSlice.reducer,
       
    }
})

export default store