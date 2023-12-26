import React, { useState } from 'react';
import Switch from 'react-switch';

const PrettySwitch = ({ onToggle, initialState = false }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <Switch
      onChange={handleToggle}
      checked={isOn}
      onColor="#86d3ff"
      onHandleColor="#0061F7"
      handleDiameter={24}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch"
    />
  );
};

export default PrettySwitch;