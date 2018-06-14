import React from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{ user.username }</li>)}
        </ul>
      </div>
    );
  }
}

export default UserList;
