import ParticlesContainer from "./components/ParticlesContainer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
export default function App() {
  return (
    <div className="w-full max-w-[100vw] xl:w-[1600px]">
      <ParticlesContainer />
      <Logo />
      <Nav />
      <Home />
      <div className="page"></div>
    </div>
  );
}
