import { all } from "redux-saga/effects";
import { watchAuth, watchOauth,watchCart, watchEditUser } from "./watcherSagas";


export default function* rootSaga() {
    yield all([
        watchAuth(),watchOauth(),watchCart(),watchEditUser()
    ])
  }