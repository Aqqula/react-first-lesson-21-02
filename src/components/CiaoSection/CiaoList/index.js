import React from "react";
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

export default CiaoList;
