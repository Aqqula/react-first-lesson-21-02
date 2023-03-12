import React from "react";
import PropTypes from "prop-types";
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

UserCard.defaultProps = {
  user: {
    id: 0,
    firstName: "none",
    lastName: "none",
    isSelected: true,
  },
  userSelector: () => {},
};

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
});
UserCard.propTypes = {
  user: userShape.isRequired,
  userSelector: PropTypes.func,
};

export default UserCard;
