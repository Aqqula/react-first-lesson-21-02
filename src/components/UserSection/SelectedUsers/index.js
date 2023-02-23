import React from "react";

const SelectedUsers = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  const mapSelectedUser = ({ id, firstName }) => <li key={id}>{firstName}</li>;
  return <ul>{selectedUsers.map(mapSelectedUser)}</ul>;
};

export default SelectedUsers;
