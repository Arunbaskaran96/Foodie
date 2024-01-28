import {  PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
    _id:string,
    name:string,
    email:string,
    token?:string,
    mobile?:string,
    success?:boolean,
    message?:string,
    orders?:Array<any>,
    address?:string
}

export interface Error {
    statuscode:number,
    message:string, 
}

interface INITIAL_STATE {
    loading:boolean,
    error:null | string,
    user:null|any
}



const initialUserState:INITIAL_STATE={
    user:null,
    loading:false,
    error:null
}

const userSlice=createSlice({
    name:'user',
    initialState:initialUserState,
    reducers:{
        signInStart:(state:INITIAL_STATE,action:PayloadAction<Record<any,any>>)=>{
            state.loading=true
        },
        signInSuccess:(state:INITIAL_STATE,action:PayloadAction<User>)=>{
            state.loading=false,
            state.user=action.payload,
            state.error=null
        },
        signInFailure:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.error=action.payload,
            state.user=null,
            state.loading=false
        },
        oAuthSigninStart:(state:INITIAL_STATE,action:PayloadAction<Record<any,any>>)=>{
            state.loading=true
        },
        oAuthSigninSuccess:(state:INITIAL_STATE,action:PayloadAction<User>)=>{
            state.loading=false,
            state.user=action.payload,
            state.error=null
        },
        oAuthSigninFailure:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.error=action.payload,
            state.user=null,
            state.loading=false
        },
        updateStart:(state:INITIAL_STATE,action:PayloadAction<Record<any,any>>)=>{
            state.loading=true
        },
        updateSuccess:(state:INITIAL_STATE,action:PayloadAction<User>)=>{
            state.loading=false,
            state.user=action.payload,
            state.error=null
        },
        updateFailure:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.error=action.payload,
            state.user=null,
            state.loading=false
        },
        addToOrder:(state:INITIAL_STATE,action:PayloadAction<any>)=>{
            state.loading=false,
            state.error=null,
            state.user.orders=[...state.user.orders,...action.payload]
        }

    }
})

export const {signInStart,signInSuccess,signInFailure,addToOrder,oAuthSigninStart,oAuthSigninSuccess,oAuthSigninFailure,updateStart,updateSuccess,updateFailure}=userSlice.actions
export default  userSlice.reducer