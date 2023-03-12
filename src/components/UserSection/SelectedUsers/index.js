import React from "react";
import PropTypes from "prop-types";
import { userShape } from "../UserCard";

const SelectedUsers = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  const mapSelectedUser = ({ id, firstName }) => <li key={id}>{firstName}</li>;
  return <ul>{selectedUsers.map(mapSelectedUser)}</ul>;
};

SelectedUsers.defaultProps = {
  user: {
    id: 0,
    firstName: "none",
    lastName: "none",
    isSelected: true,
  },
  userSelector: () => {},
};

SelectedUsers.propTypes = {
  users: PropTypes.arrayOf(userShape).isRequired,
};

export default SelectedUsers;
