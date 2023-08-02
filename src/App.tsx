import { useState } from "react";
import { Example as CSSTransitionExample } from "./examples/1_transition";
import { Example as CssAnimationExample } from "./examples/2_animation";
import { Example as SpringExample } from "./examples/3_spring";
import { Example as InteractiveExample } from "./examples/4_interaction";
import { Example as ChainExample } from "./examples/5_chain";
import { Example as CustomExample } from "./examples/6_custom";
import { Example as MultiStepExample } from "./examples/7_multi-step-spring";
import { Example as SpringsExample } from "./examples/8_springs";
import { Example as TrailsExample } from "./examples/9_trail";
import { Example as TransitionExample } from "./examples/10_spring-transition";
import { Example as ScrollExample } from "./examples/11_use_scroll";
import { Example as CapstonePropject } from "./examples/12_capstone";

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={() => setPage(0)}>CSS Transition</button>
      <button onClick={() => setPage(1)}>Css Animation</button>
      <button onClick={() => setPage(2)}>Basic Spring</button>
      <button onClick={() => setPage(3)}>Interactive</button>
      <button onClick={() => setPage(4)}>Chain</button>
      <button onClick={() => setPage(5)}>Custom</button>
      <button onClick={() => setPage(6)}>Multi Step Spring</button>
      <button onClick={() => setPage(7)}>Springs</button>
      <button onClick={() => setPage(8)}>Trails</button>
      <button onClick={() => setPage(9)}>Transition</button>
      <button onClick={() => setPage(10)}>Scroll</button>
      <button onClick={() => setPage(11)}>CapstonePropject</button>

      <div style={{ padding: "24px 0" }}>
        {page === 0 && <CSSTransitionExample />}
        {page === 1 && <CssAnimationExample />}
        {page === 2 && <SpringExample />}
        {page === 3 && <InteractiveExample />}
        {page === 4 && <ChainExample />}
        {page === 5 && <CustomExample />}
        {page === 6 && <MultiStepExample />}
        {page === 7 && <SpringsExample />}
        {page === 8 && <TrailsExample />}
        {page === 9 && <TransitionExample />}
        {page === 10 && <ScrollExample />}
        {page === 11 && <CapstonePropject />}
      </div>
    </>
  );
}

export default App;
