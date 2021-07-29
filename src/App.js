// import { useRef, useEffect } from "react";
import "./App.css";
import useWebAnimations, {
  bounce,
  rubberBand,
} from "@wellyshen/use-web-animations";

function App() {
  // const element = useRef(null);

  // useEffect(() => {
  //   element.current.focus();
  // }, []);

  const { ref, playState, getAnimation } = useWebAnimations(
    { ...bounce }
    // {...rubberBand},

    //   {
    //   keyframes: [
    //     { transform: "translate(0,0)" },
    //     { transform: "translate(600px,0)" },
    //   ],
    // animationOptions: {
    //   delay: 4000, // Start with a 500ms delay
    //       duration: 1000, // Run for 1000ms
    // iterations: Infinity, // Repeat once
    // direction: "alternate", // Run the animation forwards and then backwards
    // easing: "ease-in-out", // Use a fancy timing function
    // },
    //   // onReady: ({ playState, animate, animation }) => {
    //   //   // Triggered when the animation is ready to play
    //   // },
    //   // onUpdate: ({ playState, animate, animation }) => {
    //   //   // Triggered when the animation enters the running state or changes state
    //   // },
    //   // onFinish: ({ playState, animate, animation }) => {
    //   //   // Triggered when the animation enters the finished state
    //   // },
    //   // // More useful options...
    // }
  );

  return (
    <div className="App">
      <h1>Web Animation App Using React</h1>
      {/* <input ref={element} type="text" /> */}
      <div className="target" ref={ref}></div>
      Current Animation State: {playState}
      <button onClick={() => getAnimation().pause()}>Pause</button>
      <button onClick={() => getAnimation().play()}>Play</button>
    </div>
  );
}

export default App;
