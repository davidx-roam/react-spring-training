import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";

export const Example = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition([index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      mass: 1,
      friction: 150,
      tension: 800,
    },
  });

  return (
    <div className="container">
      <button onClick={() => setIndex(1)}>1</button>
      <button onClick={() => setIndex(2)}>2</button>
      <button onClick={() => setIndex(3)}>3</button>
      {transitions((style, item) => (
        <animated.h2 style={style}>Page {item}</animated.h2>
      ))}
    </div>
  );
};
