import { useTrail, animated } from "@react-spring/web";

// Example of useSprings
export const Example = () => {
  const items = ["foo", "bar", "baz", "qux"];
  const [trails] = useTrail(
    items.length, // Number of springs
    () => ({
      from: { left: 0 },
      to: { left: 150 },
      config: {
        mass: 10,
        friction: 100,
        tension: 700,
      },
    }), // How to animate each one based on index
    []
  );
  return (
    <div className="container">
      {trails.map((props, i) => (
        <animated.div className="square" style={{ top: i * 150, ...props }}>
          {items[i]}
        </animated.div>
      ))}
    </div>
  );
};
