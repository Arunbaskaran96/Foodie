import {  takeEvery } from "redux-saga/effects";
import {  oAuthSigninStart, signInStart, updateStart } from "../features/user/userSlice";
import { workerAuth, workerCart, workerEditUser, workerOauth } from "./workerSagas";
import { fetchingCart } from "../features/cart/cartSlice";
// import { signInStart } from "../features/user/userSlice";


export function* watchAuth(){
    yield takeEvery(signInStart,workerAuth)
}


export function* watchOauth(){
    yield takeEvery(oAuthSigninStart,workerOauth)
}

export function* watchCart(){
    yield takeEvery(fetchingCart,workerCart)
}


export function* watchEditUser(){
    yield takeEvery(updateStart,workerEditUser)
}