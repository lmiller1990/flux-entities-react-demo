import React from 'react'

import { IUser } from './types'

export interface IStateProps {
  users: IUser[]
  touched: boolean
  loading: boolean
  loaded: boolean
}

export interface IDispatchProps {
  fetchUsers: () => Promise<void>
  clearUsers: () => void
}

type TProps = IStateProps & IDispatchProps

class Users extends React.PureComponent<TProps> {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <button onClick={this.props.fetchUsers}>Fetch User</button>
        <button onClick={this.props.clearUsers}>Clear State</button>
        <div>
          <div>Pristine: {this.props.touched ? 'false' : 'true'}</div>
          <div>Loading: {this.props.loading ? 'true' : 'false'}</div>
          <div>Loaded: {this.props.loaded ? 'true': 'false'}</div>
          <ul>
            {
              this.props.users.map(user => <li key={user.id}>ID: {user.id}. Name: {user.name}</li>)
            }
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export {
  Users
}