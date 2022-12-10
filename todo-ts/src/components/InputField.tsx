import React from "react";
import "./style.css";

const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a tasks" className="input-box" />
      <button className="input-submit" type="submit">
        추가
      </button>
    </form>
  );
};

export default InputField;
