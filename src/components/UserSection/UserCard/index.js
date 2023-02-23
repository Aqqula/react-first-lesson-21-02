import React from "react";

const UserCard = (props) => {
  const {
    user: { id, lastName, firstName, isSelected },
    userSelector,
  } = props;
  const styles = { color: isSelected ? "teal" : "grey" };
  const handleSelector = () => userSelector(id);
  return (
    <article style={styles} onClick={handleSelector}>
      <h3>
        <em>{id}) </em> {firstName} {lastName}
      </h3>
    </article>
  );
};

export default UserCard;
