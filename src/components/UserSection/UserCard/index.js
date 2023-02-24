import React from "react";
import styles from "./UserCard.module.css";

const UserCard = (props) => {
  const {
    user: { id, lastName, firstName, isSelected },
    userSelector,
  } = props;
  const style = { color: isSelected ? "teal" : "grey" };
  const handleSelector = () => userSelector(id);
  return (
    <article className={styles.article} style={style} onClick={handleSelector}>
      <h3 className={styles.h3}>
        <em>{id}) </em> {firstName} {lastName}
      </h3>
    </article>
  );
};

export default UserCard;
