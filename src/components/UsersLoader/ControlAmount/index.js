import React from "react";
import PropTypes from "prop-types";

const ControlAmount = (props) => {
  const { amounts, currentResults, setResults } = props;
  const handleInput = ({ target: { value } }) => setResults(Number(value));
  const mapInputs = (elem, index) => (
    <label key={index} style={{ padding: "5px" }}>
      <input
        type="radio"
        name="results"
        value={elem}
        onChange={handleInput}
        checked={currentResults === elem}
      />
      {elem}
    </label>
  );
  return <div>{amounts.map(mapInputs)}</div>;
};

ControlAmount.defaultProps = {
  amounts: [10],
  currentResults: 10,
  handleInput: () => {},
};

ControlAmount.propTypes = {
  amounts: PropTypes.array,
  currentResults: PropTypes.number,
  handleInput: PropTypes.func,
  setResults: PropTypes.func,
};

export default ControlAmount;
