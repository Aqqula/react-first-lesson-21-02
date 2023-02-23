import React, { Component } from "react";
import SelectedUsers from "./SelectedUsers";
import UserList from "./UserList";
const usersDB = [
  { id: 1, firstName: "Brad", lastName: "Pitt" },
  { id: 2, firstName: "Tom", lastName: "Rot" },
  { id: 3, firstName: "Jon", lastName: "Snow" },
  { id: 4, firstName: "Fred", lastName: "Mercury" },
  { id: 5, firstName: "George", lastName: "Clunk" },
];

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  setUsersSelected = (newUsers) => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <SelectedUsers users={users} />
        <UserList users={users} setUsersSelected={this.setUsersSelected} />
      </>
    );
  }
}

export default UserSection;
