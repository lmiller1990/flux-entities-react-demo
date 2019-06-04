import { AnyAction } from 'redux';
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { mapEntities, isLoading, isLoaded } from 'flux-entities'

import { Users, IStateProps, IDispatchProps } from './Users'
import { IState } from './store'
import { fetchUsers, clearUsers } from './actions'

const mapStateToProps = (state: IState): IStateProps => {
  console.log(state.users)
  return {
    users: mapEntities(state.users),
    touched: state.users.touched,
    loading: isLoading(state.users),
    loaded: isLoaded(state.users),
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): IDispatchProps => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    clearUsers: () => dispatch(clearUsers())
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export {
  UsersContainer
}
