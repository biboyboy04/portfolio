import ParticlesContainer from "./components/ParticlesContainer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import About from "./components/About";
export default function App() {
  return (
    <div className="w-[100vw]">
      <ParticlesContainer />
      <Logo />
      <Nav />
      <Home />
      <About />
    </div>
  );
}
