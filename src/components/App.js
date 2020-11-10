import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["dinesh", "sai", "mouli", "naresh"];
    return (
      <div id="main">
        <ol key="relativeList">
          {relatives.map((el, index) => {
            <li key={"relativeListItem" + (index + 1)}>{el}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
