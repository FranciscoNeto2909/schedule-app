import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const schedulesRuote = "https://schedule-api-1.herokuapp.com/"
const postScheduleRoute = "https://schedule-api-1.herokuapp.com/newschedule"
export const getSchedules = createAsyncThunk("getSchedules", async () => {
    try {
        const res = await axios.get(schedulesRuote)
        return res.data
    } catch (error) {
        console.log(error)
    }
})
export const postSchedule = createAsyncThunk("postschedule", async scdl => {
    try {
        const res = await axios.post(postScheduleRoute, scdl)
        return res.data
    } catch (error) {
        console.log(error)
    }
})
export const deleteSchedule = createAsyncThunk("delschedule", async id => {
    try {
        const res = await axios.delete(`https://schedule-api-1.herokuapp.com/delschedule/${id}`)
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
            state.isAdm = true
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
export const {admOn, admOff, hideMsg, setMsg, showMsg} = slice.actions
export default slice.reducer