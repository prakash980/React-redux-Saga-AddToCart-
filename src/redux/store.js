// import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; //we have added the rootReducer file here and called it inside createStore
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';
// const dummyReducer = () =>{        now we can get rid of this dummy data since we created reducer
//     return 100;
// }
const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware:() => [sagaMiddleware]
    }
    );
sagaMiddleware.run(productSaga);  //productSaga is the file which we need to run when the saga middleware is called.

export default store;
