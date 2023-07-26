import { useEffect, useState } from "react";
import "./1_transition.css";

export const Example = () => {
  const [status, setStatus] = useState("start");

  useEffect(() => {
    setStatus("end");
  }, []);

  return (
    <div className="container">
      <div className={`square css-transition ${status}`}></div>
    </div>
  );
};
