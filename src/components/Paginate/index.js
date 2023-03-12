import React from "react";
import PropTypes from "prop-types";

const Paginate = (props) => {
  const { currentPage, handlePrevBtn, handleNextBtn } = props;
  return (
    <div>
      <button onClick={handlePrevBtn}>&lt; prev </button>
      <strong> {currentPage} </strong>
      <button onClick={handleNextBtn}>next &gt;</button>
    </div>
  );
};

Paginate.defaultProps = {
  currentPage: 1,
  handleNextBtn: () => {},
  handlePrevBtn: () => {},
};

Paginate.propTypes = {
  currentPage: PropTypes.number,
  handleNextBtn: PropTypes.func,
  handlePrevBtn: PropTypes.func,
};

export default Paginate;
