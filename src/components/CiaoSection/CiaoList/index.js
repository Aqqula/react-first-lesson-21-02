import React from "react";
import PropTypes from "prop-types";
import Ciao from "../Ciao";

const CiaoList = (props) => {
  const mapUsers = (user) => (
    <Ciao
      key={user.id}
      id={user.id}
      name={user.firstName}
      classStyle="welcome"
    />
  );

  const { users } = props;
  return <>{users.map(mapUsers)}</>;
};

const usersShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  lastName: PropTypes.string,
  firstName: PropTypes.string.isRequired,
});

CiaoList.propTypes = {
  users: PropTypes.arrayOf(usersShape).isRequired,
  classStyle: PropTypes.string.isRequired,
};
export default CiaoList;
