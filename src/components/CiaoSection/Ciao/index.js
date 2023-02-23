import React, { Component } from "react";

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }

  handleSwitch = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };

  render() {
    const { isHi } = this.state;
    const { classStyle, name, id } = this.props;
    if (!isHi) {
      return (
        <p>
          id:{id} Bye,{name}
        </p>
      );
    }
    return (
      <article className={classStyle}>
        <h2>
          {" "}
          id:{id}
          <br />
          {isHi ? "hi" : "bye"},{name ? name : "anonym"}!
        </h2>
        <button onClick={this.handleSwitch}>
          {isHi === true ? "bye" : "Hi"}
        </button>
      </article>
    );
  }
}

export default Ciao;
