import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Ciao.module.scss";

/**
 *
 * @param {*} props
 * @param {string} props.classStyle
 * @param {string} props.name
 * @param {number} props.id
 */
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
        <h2 className={styles.container}>
          {" "}
          id:{id}
          <br />
          {isHi ? "hi" : "bye"},{name ? name : "anonym"}!
        </h2>
        <button className={styles.btn} onClick={this.handleSwitch}>
          {isHi === true ? "bye" : "Hi"}
        </button>
      </article>
    );
  }
}


Ciao.propTypes = {
  classStyle: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Ciao;
