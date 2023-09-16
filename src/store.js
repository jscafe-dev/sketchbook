import { configureStore } from '@reduxjs/toolkit'
import MenuReducer from '@/slice/menuSlice'
export const store = configureStore({
    reducer: {
        menu: MenuReducer
    }
})