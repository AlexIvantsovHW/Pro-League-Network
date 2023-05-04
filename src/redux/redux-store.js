import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";

import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'




let reducers=combineReducers({

})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;




