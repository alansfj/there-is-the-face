import "./App.css";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Rank from "./components/Rank";
import Particles from "react-tsparticles";
import particlesOptions from "./assets/particles.json";

function App() {
  return (
    <div className="App">
      <Particles className="particles" options={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
