import { useSprings, animated } from "@react-spring/web";

// Example of useSprings
export const Example = () => {
  const items = ["foo", "bar", "baz", "qux"];
  const [springs] = useSprings(
    items.length, // Number of springs
    (i) => ({
      from: { left: 0 },
      to: { left: 150 + i * 10 },
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
      {springs.map((props, i) => (
        <animated.div
          key={items[i]}
          className="square"
          style={{ top: i * 150, ...props }}
        >
          {items[i]}
        </animated.div>
      ))}
    </div>
  );
};
