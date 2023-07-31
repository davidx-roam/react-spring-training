import { useSpring, animated } from "@react-spring/web";

// Looping multi step using a single spring
export const Example = () => {
  const spring = useSpring({
    from: { top: 0, left: 100 },
    to: [
      { top: 0, left: 300 },
      { top: 200, left: 300 },
      { top: 200, left: 100 },
      { top: 0, left: 100 },
    ], // different steps in the animation
    loop: true,
    config: {
      mass: 5,
      friction: 100,
      tension: 700,
    },
  });

  return (
    <div className="container">
      <animated.div key="1" className="square" style={spring}></animated.div>
    </div>
  );
};
