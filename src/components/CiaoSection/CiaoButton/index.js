import React from "react";

const CiaoButton = (props) => {
  const {
    isDirectGrowthByName,
    isDirectGrowthById,
    setUsersSortedByName,
    setUsersSortedById,
  } = props;
  const sortByName = () => {
    const { users, isDirectGrowthByName } = props;
    const newUsers = [...users];
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return isDirectGrowthByName ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isDirectGrowthByName ? -1 : 1;
      }
      return 0;
    });

    setUsersSortedByName(newUsers, isDirectGrowthByName);
  };
  const sortById = () => {
    const { users, isDirectGrowthById } = props;
    const newUsers = [...users];
    newUsers.sort((a, b) => (isDirectGrowthById ? a.id - b.id : b.id - a.id));

    setUsersSortedById(newUsers, isDirectGrowthById);
  };
  return (
    <>
      <button onClick={setUsersSortedByName ? sortByName : sortById}>
        sort by {setUsersSortedByName ? "name " : "id "}
        {isDirectGrowthById || isDirectGrowthByName ? "growth" : "less"}
      </button>
    </>
  );
};

export default CiaoButton;
