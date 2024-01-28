import { call, put } from "redux-saga/effects"
import { User, oAuthSigninFailure, oAuthSigninSuccess, signInFailure, signInSuccess } from "../features/user/userSlice"
import useLocalStorage from "../../hooks/useLocalStorage"
import { fetchedError, fetchedSuccessFully } from "../features/cart/cartSlice"

const {getItem} =useLocalStorage('token')
const token=getItem()
export function* workerAuth(action:any){
    const data:Record<any,any>= yield call(()=>fetch('https://foodieapi-7udh.onrender.com/api/signin',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(action.payload)
    }))
    const result:User=yield data.json()
    if(result.success === false){
        yield put(signInFailure(result.message))
    }else{
        yield put(signInSuccess(result))
    }
}


export function* workerOauth(action:any){
    const data:Record<any,any>= yield call(()=>fetch('https://foodieapi-7udh.onrender.com/api/oauth',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',

        },
        body:JSON.stringify(action.payload)
    }))
    const result:User=yield data.json()
    if(result.success === false){
        yield put(oAuthSigninFailure(result.message))
    }else{
        yield put(oAuthSigninSuccess(result))
    }
}


export function* workerCart (){
    const data:Record<any,any>=yield fetch("https://foodieapi-7udh.onrender.com/api/getCart",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:token
        }
    })
    const result:Record<any,any> = yield data.json()
    if(result.success === false){
        yield put(fetchedError(result.message))
    }else{
        yield put(fetchedSuccessFully(result))
    }
}

export function* workerEditUser (action:any){
    const data:Record<any,any>= yield call(()=>fetch('https://foodieapi-7udh.onrender.com/api/edituser',{
        method:"PUT",
        headers:{
            'Content-Type':'application/json',
            Authorization:token
        },
        body:JSON.stringify(action.payload)
    }))
    const result:User=yield data.json()
    if(result.success === false){
        yield put(signInFailure(result.message))
    }else{
        yield put(signInSuccess(result))
    }

}