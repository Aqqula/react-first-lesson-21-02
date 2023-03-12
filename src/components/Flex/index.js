import React from "react";
import styles from "./Flex.module.scss";
import PropTypes from "prop-types";

const dirHelper = (column, reverse) => {
  const flexDir = [];
  if (column) {
    flexDir.push("column");
  } else {
    flexDir.push("row");
  }
  if (reverse) {
    flexDir.push("reverse");
  }
  return flexDir.join("-");
};

const Flex = (props) => {
  const { children, fd, jc, ai, fw, style, column, reverse, ...restProps } =
    props;

  const inlineStyle = {
    ...style,
    display: "flex",
    flexDirection: dirHelper(column, reverse),
    justifyContent: jc,
    alignItems: ai,
    flexWrap: fw,
  };
  return (
    <div className={styles.flex} style={inlineStyle} {...restProps}>
      {children}
    </div>
  );
};

Flex.defaultProps = {
  fd: "row",
  jc: "start",
  ai: "centre",
  fw: "wrap",
};

Flex.propTypes = {
  children: PropTypes.element,
  fd: PropTypes.string,
  jc: PropTypes.string,
  ai: PropTypes.string,
  fw: PropTypes.string,
};

export default Flex;
