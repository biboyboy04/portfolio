import ParticlesContainer from "./components/ParticlesContainer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import About from "./components/About";
import Works from "./components/Works";
export default function App() {
  return (
    <div className="w-[100vw] overflow-y-auto overflow-x-hidden">
      <ParticlesContainer />
      <Logo />
      <Nav />
      <Home />
      <About />
      <Works />
      <div className="page"></div>
    </div>
  );
}
