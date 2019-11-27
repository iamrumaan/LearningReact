import React from "react";
import ReactDOM from "react-dom";
import Table from "./HitList";

//Class Component
class Dept extends React.Component {
  deptElement;
  tableElement;
  constructor(props) {
    super(props);
  }

  render() {
    this.deptElement = (
      <div align="center" style={{ fontFamily: "Rockwell" }}>
        <h1 style={{ color: "red" }}>Welcome to Hitman Network</h1>
        <Table id="47" />
      </div>
    );
    return this.deptElement;
  }
}

//Function Component
function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}

ReactDOM.render(<Dept />, document.getElementById("root"));
