import { combineReducers, createStore } from "redux"

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer)
export default store