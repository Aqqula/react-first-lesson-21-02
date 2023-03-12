import React, { Component } from "react";
import { getRandomUser } from "../../api";
import Spinner from "../Spinner";
import ErrorImg from "../ErrorImg";
import UsersList from "./UsersList";
import Paginate from "../Paginate";
import ControlAmount from "./ControlAmount";
import ControlGender from "./ControlGender";
import ControlNat from "./ControlNat";

const nat = ["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB"];

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      currentResults: 10,
      currentNat: "GB",
      currentGender: "",
    };
  }

  load = () => {
    const { currentPage, currentResults, currentGender, currentNat } =
      this.state;
    this.setState({ isPending: true });
    getRandomUser({
      page: currentPage,
      results: currentResults,
      gender: currentGender,
      nat: currentNat,
    })
      .then((data) => {
        if (data.error) {
          return this.setState({ error: data.error });
        }
        // console.log(data);
        this.setState({ users: data.results, error: null });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage, currentResults, currentGender, currentNat } =
      this.state;
    if (
      currentPage !== prevState.currentPage ||
      currentResults !== prevState.currentResults ||
      currentGender !== prevState.currentGender ||
      currentNat !== prevState.currentNat
    ) {
      this.load();
    }
  }

  handlePrevBtn = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  };

  handleNextBtn = () =>
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));

  setResults = (value) => this.setState({ currentResults: Number(value) });

  setGender = (value) => this.setState({ currentGender: value });

  setNat = (value) => this.setState({ currentNat: value });

  render() {
    const {
      users,
      isPending,
      error,
      currentPage,
      currentResults,
      currentGender,
      currentNat,
    } = this.state;

    if (error) {
      return <ErrorImg />;
    }
    if (isPending) {
      return <Spinner />;
    }
    return (
      <div>
        <section>
          <h2>Users List</h2>
          <ControlAmount
            amounts={[5, 10, 15]}
            currentResults={currentResults}
            setResults={this.setResults}
          />
          <ControlGender
            genders={["male", "female"]}
            setGender={this.setGender}
            currentGender={currentGender}
          />
          <ControlNat nat={nat} setNat={this.setNat} currentNat={currentNat} />
          <Paginate
            currentPage={currentPage}
            handlePrevBtn={this.handlePrevBtn}
            handleNextBtn={this.handleNextBtn}
          />
          <UsersList users={users} />
        </section>
      </div>
    );
  }
}

export default UsersLoader;
