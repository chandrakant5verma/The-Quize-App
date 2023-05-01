import {configureStore, combineReducers} from '@reduxjs/toolkit'

import questioReducer from './questions_reducer'
import resultReducer from './result_reducer'

const rootReducer = combineReducers({
    questions:questioReducer,
    result: resultReducer
})

export default configureStore({reducer:rootReducer})