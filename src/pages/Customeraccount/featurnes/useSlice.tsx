import { createSlice } from "@reduxjs/toolkit";




export const useSlice = createSlice({
    name: "user",
    initialState:{
        user : {
            idUser: "",
            userName:null,
            isLogin: false,
            isAdmin: false,
        },
        
    },
    reducers:{
        login: (state, action) =>{
            state.user = action.payload
        },
        logout: (state)=>{
            state.user.idUser = ""
            state.user.userName = null
            state.user.isLogin = false
            state.user.isAdmin = false
        }
    }
})

export const {login, logout} = useSlice.actions;
export const selectUser = (state:any)=> state.user.user;
export default useSlice.reducer;