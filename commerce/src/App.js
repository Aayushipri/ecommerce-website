import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { content, imagePreview } from "./contents";
import LoadImage from "./LoadImage";
import LoadVideo from "./LoadVideo";

function App() {
  return (
    <div className="App">
      {content.map((item) => {
        if (item.type === "image") {
          return <LoadImage key={item.id} item={item} />;
        } else if (item.type === "video") {
          return <LoadVideo key={item.id} item={item} />;
        }
      })}
    </div>
  );
}

export default App;
