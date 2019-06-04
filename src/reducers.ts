import { IAjaxState } from 'flux-entities'

import { IUser } from './types'
import { TUserAction } from './actions'

export interface IUsersState extends IAjaxState<IUser> {}

const initialState: IUsersState = {
  ids: [],
  all: {},
  loading: false,
  touched: false,
  errors: []
}

const usersReducer = (state: IUsersState = initialState, action: TUserAction): IUsersState => {
  if (action.type === 'CLEAR_USERS_STATE') {
    return { ...initialState }
  }

  if (action.type === 'FETCH_USERS_REQUEST') {
    return {
      ...state,
      touched: true,
      loading: true
    }
  }

  if (action.type === 'FETCH_USERS_SUCCESS') {
    return action.payload.reduce<IUsersState>((acc, curr) => {
      return {
        ...state,
        loading: false,
        loaded: true,
        ids: Array.from(new Set([...acc.ids, curr.id])),
        all: { ...acc.all, [curr.id]: curr }
      }
    }, { ...state })
  }

  return state
}

export {
  usersReducer
}