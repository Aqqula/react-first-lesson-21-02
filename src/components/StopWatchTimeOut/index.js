import React, { Component } from "react";
import styles from "./StopWatchTimeOut.module.css";

class StopWatchTimeOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.idTimeOut = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  start = () => {
    if (this.idTimeOut === null) {
      this.idTimeOut = setTimeout(this.tick, 1000);
    }
  };

  stop = () => {
    clearTimeout(this.idTimeOut);
    this.idTimeOut = null;
  };

  reset = () => {
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
    this.stop();
  };

  componentDidMount() {
    // this.start();
  }
  componentDidUpdate() {
    if (this.idTimeOut) {
      this.idTimeOut = setTimeout(this.tick, 1000);
    }
  }
  componentWillUnmount() {
    // this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <div className={styles.controlBtn}>
          <button className={styles.btn} onClick={this.start}>
            Start
          </button>
          <button className={styles.btn} onClick={this.stop}>
            stop
          </button>
          <button className={styles.btn} onClick={this.reset}>
            Reset
          </button>
        </div>
      </article>
    );
  }
}

export default StopWatchTimeOut;
