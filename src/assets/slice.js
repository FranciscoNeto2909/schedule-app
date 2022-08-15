import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const schedulesRuote = "http://localhost:3000"

export const getSchedules = createAsyncThunk("getSchedules", async () => {
    try {
        const res = await axios.get(schedulesRuote)
        return res.data
    } catch (error) {
        console.log(error)
    }
})

const slice = createSlice({
    name:"schedule",
    initialState:{
        schedules:[],
        isAdm:false,
        hasMsg:false,
        msg:""
    },
    reducers:{
        admOn:(state)=>{
            return {...state, isAdm:true}
        },
        admOff:(state)=>{
            return {...state, isAdm:false}
        },
        showMsg:(state)=>{
            return {...state, hasMsg:true}
        },
        hideMsg:(state)=>{
            return {...state, hasMsg:false}
        },
        setMsg : (state, action) =>{
            return {...state, msg:action.payload}
        }
    },
    extraReducers:(build) => {
        build
        .addCase(getSchedules.fulfilled, (state, action) => {
           return {...state, schedules : action.payload.schedules}
        })
    }
})

export default slice.reducer