import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        isLoggedIn: false,
         user: {} },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
            state.user = []

        },
        currentloggeduser(state, action) {
            const user = action.payload
            state.user = user
        }

    }
})

export const authActions = authSlice.actions;
export default authSlice