import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice(
    {
        name:"User",
        initialState:{
            data:null,
            token:null
        },
        reducers:{
            login(state, action) {
                // state.data = action.payload.data;
                // state.token = action.payload.token;
            },
            logout(state) {
                // state.data = null;
            },
            lsToUser(state) {

            }
        }

    }
);

export default  UserSlice.reducer;
export const { login, logout, lsToUser } = UserSlice.actions;
