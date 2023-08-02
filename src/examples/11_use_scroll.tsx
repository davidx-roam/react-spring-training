import { useScroll, animated } from "@react-spring/web";
import { useRef, useState } from "react";

export const Example = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [showFinalText, setShowFinalText] = useState(false);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        setShowFinalText(true);
      } else {
        setShowFinalText(false);
      }
    },
  });
  return (
    <div
      ref={containerRef}
      style={{ overflowY: "scroll", height: "50vh", border: "1px solid black" }}
    >
      <animated.h1
        style={{ opacity: scrollYProgress, position: "absolute", top: 300 }}
      >
        Appears as you scroll
      </animated.h1>
      {showFinalText && (
        <h1 style={{ position: "absolute" }}>End of the screen</h1>
      )}
      <div style={{ height: "100vh" }}>Page1</div>
      <div style={{ height: "100vh" }}>Page2</div>
      <div style={{ height: "100vh" }}>Page3</div>
      <div style={{ height: "100vh" }}>Page4</div>
      <div style={{ height: "100vh" }}>Page5</div>
    </div>
  );
};
