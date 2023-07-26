import { useSpring, animated } from "@react-spring/web";

export const Example = () => {
  const [spring, api] = useSpring(() => ({
    from: { left: 0 },
    config: {
      mass: 10,
      friction: 50,
      tension: 1200,
    },
  }));

  const handleClick = () => {
    api({
      from: { left: 0 },
      to: { left: 200 },
    });
  };

  return (
    <div className="container">
      <animated.div
        className="square"
        style={spring}
        onClick={handleClick}
      ></animated.div>
    </div>
  );
};
