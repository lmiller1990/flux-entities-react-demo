import { createStore, combineReducers, applyMiddleware, AnyAction } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { usersReducer, IUsersState } from './reducers'

export interface IState {
  users: IUsersState
}

const initializeStore = () =>
  createStore<IState, AnyAction, {}, {}>(
    combineReducers({
      users: usersReducer,
    }),
    applyMiddleware(thunkMiddleware)
  )

export { initializeStore }