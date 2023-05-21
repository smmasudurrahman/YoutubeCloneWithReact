import { useState, useEffect } from "react";
import "./TaggerButton.css";

export const Toggle = ({ toggled, onClick }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  useEffect(() => {
    setIsToggled(toggled);
  }, [toggled]);

  const callback = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    onClick(newState);
  };

  return (
    <div className="toggle" onClick={callback}>
      <input type="checkbox" checked={isToggled} readOnly />
      <div className="buton"></div>
    </div>
  );
};
