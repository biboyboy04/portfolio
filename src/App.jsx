import ParticlesContainer from "./components/ParticlesContainer";
import Home from "./components/Home";
export default function App() {
  return (
    <div className="w-full max-w-[100vw] xl:w-[1600px]">
      <ParticlesContainer />
      <Home />
      <div className="page"></div>
    </div>
  );
}
