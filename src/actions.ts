import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { IUser } from './types'

interface IFetchUsersSuccess {
  type: 'FETCH_USERS_SUCCESS',
  payload: IUser[]
}

interface IClearUsersState {
  type: 'CLEAR_USERS_STATE',
}

interface IFetchUsersRequest {
  type: 'FETCH_USERS_REQUEST',
}

const fetchUsersSuccess = (users: IUser[]) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users
})

const fetchUsersRequest = () => ({
  type: 'FETCH_USERS_REQUEST',
})

const clearUsers = () => ({
  type: 'CLEAR_USERS_STATE',
})

const fakeApiCall = (): Promise<IUser[]> => {
  return new Promise<IUser[]>(res => {
    setTimeout(() => {
      res(
        [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Catherine' },
        ]
      )
    }, 1000)
  })
}

const fetchUsers = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(fetchUsersRequest())
    try {
        const response = await fakeApiCall()
        dispatch(fetchUsersSuccess(response))
    } catch (e) {
      // handle error 
      // state.errors = ['some error message']
    }
  }
}


export type TUserAction = IFetchUsersRequest | IFetchUsersSuccess | IClearUsersState

export {
  fetchUsersRequest,
  fetchUsersSuccess,
  clearUsers,
  fetchUsers
}
