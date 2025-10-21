import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-7xl text-indigo-300">Hello, GSAP!</h1>
    </div>
  );
}

export default App;
