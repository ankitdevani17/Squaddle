import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        },
        currentloggeduser(state, action) {
            state.currentloggeduser = action.payload
        }
        

    }
})

export const authActions = authSlice.actions;
export default authSlice