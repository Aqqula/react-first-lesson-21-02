import React from "react";
import UserCard from "../UserCard";

const UserList = (props) => {
  const userSelector = (id) => {
    const { users, setUsersSelected } = props;
    const newUsers = users.map((user) =>
      user.id === id ? { ...user, isSelected: true } : user
    );
    setUsersSelected(newUsers);
  };

  const mapUsers = (user) => (
    <UserCard key={user.id} user={user} userSelector={userSelector} />
  );

  const { users } = props;
  return (
    <section>
      <h2> Users List </h2>
      {users.map(mapUsers)}
    </section>
  );
};

export default UserList;
