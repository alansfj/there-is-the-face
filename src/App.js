import "./App.css";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Rank from "./components/Rank";
import Particles from "react-tsparticles";
import particlesOptions from "./assets/particles.json";
import { useState } from "react";
import FaceRecognition from "./components/FaceRecognition";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "693040b8cb044318860b9fac5a579775",
});

function App() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onBtnSubmit = () => {
    setImageURL(input);
    app.models
      .predict("f76196b43bbd45c99b4f3cd8e8b40a8a", input)
      .then(res =>
        console.log(res.outputs[0].data.regions[0].region_info.bounding_box)
      );
  };

  return (
    <div className="App">
      <Particles className="particles" options={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit} />
      <FaceRecognition imageURL={imageURL} />
    </div>
  );
}

export default App;
