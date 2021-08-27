import "./App.css";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Particles from "react-tsparticles";
import particlesOptions from "./assets/particles.json";
import { useRef, useState } from "react";
import FaceRecognition from "./components/FaceRecognition";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "YOUR_API_KEY",
});

function App() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [box, setBox] = useState({});

  const imgRef = useRef();

  const faceLocation = boxObj => {
    const width = Number(imgRef.current.width);
    const height = Number(imgRef.current.height);

    return {
      leftCol: boxObj.left_col * width,
      topRow: boxObj.top_row * height,
      rightCol: width - boxObj.right_col * width,
      bottomRow: height - boxObj.bottom_row * height,
    };
  };

  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onBtnSubmit = async () => {
    setImageURL(input);
    try {
      const res = await app.models.predict(
        "f76196b43bbd45c99b4f3cd8e8b40a8a",
        input
      );

      const boundingBoxObj =
        res.outputs[0].data.regions[0].region_info.bounding_box;

      console.log(boundingBoxObj);

      setBox(faceLocation(boundingBoxObj));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Particles className="particles" options={particlesOptions} />
      <Logo />
      <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit} />
      <FaceRecognition imageURL={imageURL} imgRef={imgRef} box={box} />
    </div>
  );
}

export default App;
