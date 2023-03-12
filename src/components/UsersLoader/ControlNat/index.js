import React from "react";
import PropTypes from "prop-types";

const ControlNat = (props) => {
  const { nat, setNat, currentNat } = props;

  const handleInput = ({ target: { name } }) => {
    setNat(name);
  };

  const mapNationals = (elem, index) => (
    <div key={index} style={{ padding: "5px" }}>
      <input
        type="checkbox"
        id={elem}
        name={elem}
        checked={currentNat === elem}
        onChange={handleInput}
      />
      <label htmlFor={elem}>{elem}</label>
    </div>
  );

  return (
    <fieldset style={{ margin: "5px", display: "flex", width: "30%" }}>
      <legend>Choose nationals:</legend>
      {nat.map(mapNationals)}
    </fieldset>
  );
};

ControlNat.propTypes = {
  nat: PropTypes.array,
  currentNat: PropTypes.string,
  handleInput: PropTypes.func,
  setNat: PropTypes.func,
};

export default ControlNat;
