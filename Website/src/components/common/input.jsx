import React from "react";

const Input = ({ name, placeholder, error, ...rest }) => {
  return (
    <React.Fragment>
      <input type="text" {...rest} placeholder={placeholder} name={name} />
      {error && <div className="error">{error}</div>}
    </React.Fragment>
  );
};

export default Input;
