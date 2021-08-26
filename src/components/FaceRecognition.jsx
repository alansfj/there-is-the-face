import React from "react";
import "../css/FaceRecognition.css";

const FaceRecognition = ({ imageURL, imgRef, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {imageURL && (
          <img
            ref={imgRef}
            src={imageURL}
            alt="img"
            width="500px"
            height="auto"
          />
        )}

        <div
          className="bounding-box"
          style={{
            left: box.leftCol,
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
