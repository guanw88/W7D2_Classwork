import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store"

// import Redux
// function Root() {
//   return (
//     "<div>React is working!</div>"; 
//   )
// } 

window.store = configureStore();
  
document.addEventListener("DOMContentLoaded", () => {
  configureStore();
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById("root"));
});