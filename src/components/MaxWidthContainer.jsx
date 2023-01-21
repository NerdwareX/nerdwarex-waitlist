import React from "react";
import cx from "classnames";

const MaxWidthContainer = ({ children, ...props }) => {
  return (
    <div className={cx("flex", "flex-col")} {...props}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
