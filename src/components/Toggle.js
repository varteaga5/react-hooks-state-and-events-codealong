import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function onClickHandler() {
    setIsOn((isOn) => !isOn);
  }
  return (
    <button
      onClick={onClickHandler}
      style={{ background: isOn ? "red" : "white" }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
