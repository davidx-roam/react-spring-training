import { useSpring, useSpringRef, useChain, animated } from "@react-spring/web";

export const Example = () => {
  const slideRef = useSpringRef();
  const growRef = useSpringRef();
  const slideProps = useSpring({
    ref: slideRef,
    from: { left: 0 },
    to: { left: 150 },
    config: {
      mass: 10,
      friction: 50,
      tension: 1200,
    },
  });
  const growProps = useSpring({
    ref: growRef,
    from: { scale: 1 },
    to: { scale: 2 },
    config: {
      mass: 10,
      friction: 50,
      tension: 1200,
    },
  });
  useChain([slideRef, growRef], [0, 1]);

  return (
    <div className="container">
      <animated.div
        className="square"
        style={{ ...slideProps, ...growProps }}
      ></animated.div>
    </div>
  );
};
