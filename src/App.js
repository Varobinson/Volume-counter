import React from "react";
import "./styles.css";
import Volume from "./Volume";

export default function App() {
  const imgUrl =
    "https://source.unsplash.com/collection/" + Volume.picNum + "/1600x900";

  const backgroundStyle = {
    backgroundImage: "url(" + imgUrl + ")"
  };
  return (
    <div className="App" style={backgroundStyle}>
      <div>
        {" "}
        <h1>Volume</h1>
      </div>
      <br />
      <div className="runner">
        {" "}
        <Volume />{" "}
      </div>
    </div>
  );
}
