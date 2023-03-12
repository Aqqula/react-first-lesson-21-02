import React, { Component } from "react";
import { format, add, startOfMonth } from "date-fns";
import styles from "./Calendar.module.scss";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  addDay = () => {
    const { date } = this.state;
    this.setState({ date: add(date, { days: 1 }) });
  };
  addMonth = () => {
    const { date } = this.state;
    this.setState({ date: add(date, { months: 1 }) });
  };
  render() {
    const { date } = this.state;
    return (
      <div className={styles.container}>
        <p className={styles.content}>{format(startOfMonth(date), "EEEE")}</p>
        <h2 className={styles.content}>{format(date, "'Date:' EEEE, dd LLLL 'Time: 'HH:mm:ss")}</h2>
        <button className={styles.btn} onClick={this.addDay}>Add 1 day</button>
        <button className={styles.btn} onClick={this.addMonth}>Add 1 day</button>
      </div>
    );
  }
}

export default Calendar;
