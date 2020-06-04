import React from "react";
import CommentDetail from "./CommentDetail";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <CommentDetail greeting="Enter" />
      </div>
    );
  }
}

export default App;
