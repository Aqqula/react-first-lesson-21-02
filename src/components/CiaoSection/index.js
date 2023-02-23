import React, { Component } from "react";
import CiaoButton from "./CiaoButton";
import CiaoList from "./CiaoList/index";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 10, firstName: "Brad", lastName: "Pitt" },
        { id: 7, firstName: "Tom", lastName: "Rot" },
        { id: 3, firstName: "Jon", lastName: "Snow" },
        { id: 12, firstName: "Fred", lastName: "Mercury" },
        { id: 9, firstName: "George", lastName: "Clunk" },
      ],
      isDirectGrowthById: true,
      isDirectGrowthByName: true,
    };
  }
  setUsersSortedByName = (newUsers, isDirectGrowthByName) => {
    this.setState({
      users: newUsers,
      isDirectGrowthByName: !isDirectGrowthByName,
    });
  };

  setUsersSortedById = (newUsers, isDirectGrowthById) => {
    this.setState({ users: newUsers, isDirectGrowthById: !isDirectGrowthById });
  };

  render() {
    const { users, isDirectGrowthByName, isDirectGrowthById } = this.state;
    return (
      <>
        <CiaoButton
          isDirectGrowthById={isDirectGrowthById}
          users={users}
          setUsersSortedById={this.setUsersSortedById}
        />
        <CiaoButton
          isDirectGrowthByName={isDirectGrowthByName}
          users={users}
          setUsersSortedByName={this.setUsersSortedByName}
        />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
