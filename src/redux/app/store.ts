import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../combineReducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/rootSagas";


const sagaMiddleWare=createSagaMiddleware()


const store = configureStore({
    reducer:reducers,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
    }).concat(sagaMiddleWare),
})

sagaMiddleWare.run(rootSaga)

export default store

export type RootState =ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch