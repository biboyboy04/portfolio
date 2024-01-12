import ParticlesContainer from "./components/ParticlesContainer";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
export default function App() {
  return (
    <div className=" w-full xl:w-[1600px]">
      <ParticlesContainer />
      <Logo />
      <Home />
    </div>
  );
}
