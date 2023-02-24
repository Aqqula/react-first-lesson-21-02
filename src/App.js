import React from "react";
import "./App.css";
// import CiaoSection from "./components/CiaoSection";
// import UserSection from "./components/UserSection";
import Ciao from "./components/CiaoSection/Ciao";
import StopWatch from "./components/StopWatch";
import StopWatchTimeOut from "./components/StopWatchTimeOut";
import UserCard from "./components/UserSection/UserCard";

const App = (props) => {
  return (
    <>
      <StopWatchTimeOut />
      <UserCard
        user={{ id: 2, firstName: "Brad", lastName: "Pitt" }}
        userSelector="#"
      />
      <StopWatch />
      <Ciao classStyle="welcome" name="qwerty" id="2" />
      {/* <UserSection />
      <CiaoSection /> */}
    </>
  );
};
//!Example
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement(
//     "header",
//     { className: "App-header" },
//     React.createElement("img", {
//       src: logo,
//       className: "App-logo",
//       alt: "logo",
//     }),
//     React.createElement(
//       "p",
//       null,
//       "Edit",
//       React.createElement("code", {}, "src/App.js"),
//       "and save to reload."
//     ),
//     React.createElement(
//       "a",
//       {
//         className: "App-link",
//         href: "https://reactjs.org",
//         target: "_blank",
//         rel: "noopener noreferrer",
//       },
//       "Learn React"
//     )
//   )
// );

// render() {
//   const {users} = this.state;
//   return (
//     <div>
//       <HeadingH1 className="heading" title="Hi" content="Hello!!!!" />
//       <Ciao classStyle="welcome" name={this.state.users[0].firstName} />
//       <Ciao classStyle="welcome" name={this.state.users[1].firstName} />
//       <Ciao classStyle="welcome" name={this.state.users[2].firstName} />
//       <Ciao classStyle="welcome" name={this.state.users[3].firstName} />
//     </div>
//   );
// }

export default App;
