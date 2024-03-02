import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userInfo:{
        name:""
    }
}
const studentSlice=createSlice({
    name:"studentSlice",
    initialState,
    reducers:{
        updateStudentInfo:(state,action)=>{
            return {...state,userInfo:action.payload }
        }

    }

})

export const {updateStudentInfo} =studentSlice.actions
export default studentSlice.reducer