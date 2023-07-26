import { useSpring, animated } from "@react-spring/web";

export const Example = () => {
  const spring = useSpring({
    from: { left: 0 },
    to: { left: 200 },
    config: {
      // Doc to config: https://react-spring.dev/docs/advanced/config
      mass: 1,
      friction: 200,
      tension: 300,
    },
  });

  return (
    <div className="container">
      <animated.div className="square" style={spring}></animated.div>
    </div>
  );
};
