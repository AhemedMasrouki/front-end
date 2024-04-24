import {createSlice} from "@reduxjs/toolkit"



const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:{},
        token:localStorage.getItem('token')||null,
        loading:false,
        error:null,
        isAuth:localStorage.getItem('isAuth')||false
    }
})



export default userSlice.reducer