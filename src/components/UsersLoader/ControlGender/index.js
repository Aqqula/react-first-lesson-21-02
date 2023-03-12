import React from "react";
import PropTypes from "prop-types";

const ControlGender = (props) => {
  const { genders, setGender } = props;
  const handleOption = ({ target: { value } }) => setGender(value);

  const mapOptions = (elem, index) => (
    <option key={index} value={elem} onChange={handleOption}>
      {elem}
    </option>
  );
  return (
    <select
      name="select"
      defaultValue={"DEFAULT"}
      style={{ padding: "3px", margin: "5px" }}
    >
      <option value="DEFAULT">Choose a gender ...</option>
      {genders.map(mapOptions)}
    </select>
  );
};

ControlGender.propTypes = {
  genders: PropTypes.array,
  currentGender: PropTypes.string,
  handleOption: PropTypes.func,
};

export default ControlGender;
