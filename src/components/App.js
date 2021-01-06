import React from "react";

const { ipcRenderer } = require("electron");

const App = () => {
  const clickHandler = e => {
    e.preventDefault();
    fetch("http://localhost:9090")
      .then(response => response.json())
      .then(res => ipcRenderer.send("redirect", res));
  };

  return (
    <div className="app">
      <input type="button" id="redirect" value="Redirect" className="button1" onClick={clickHandler}></input>
    </div>
  );
};

export default App;
