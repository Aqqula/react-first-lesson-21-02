import React, { Component } from "react";
import cx from "classnames";
import styles from "./WelcomeForm.module.css";
const nameRegex = /[A-Za-z0_-]{3,15}$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const initialState = {
  name: "",
  phone: "",
  nameValid: true,
  phoneValid: true,
};

class WelcomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.name.value);
    console.log(target.phone.value);
    this.setState({ ...initialState });
  };

  handleName = ({ target: { value } }) => {
    console.log(nameRegex.test(value));
    this.setState({ name: value, nameValid: nameRegex.test(value) });
  };
  handlePhone = ({ target: { value } }) =>
    this.setState({ phone: value, phoneValid: phoneRegex.test(value) });

  render() {
    const { name, phone, nameValid, phoneValid } = this.state;
    const nameClassName = cx(styles.input, { [styles.invalid]: !nameValid });
    const phoneClassName = cx(styles.input, { [styles.invalid]: !phoneValid });
    return (
      <>
        <h1 className={styles.h1}>Welcome, enter your data!</h1>
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <input
            className={nameClassName}
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={this.handleName}
          />
          <input
            className={phoneClassName}
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={phone}
            onChange={this.handlePhone}
          />
          <input className={styles.input} type="submit" value="send" />
        </form>
      </>
    );
  }
}

export default WelcomeForm;
