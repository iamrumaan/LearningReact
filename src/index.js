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
      <div
        align="center"
        style={{
          fontFamily: "Rockwell",
          color: "white"
        }}
      >
        <div class="" style={{ backgroundColor: "black", color: "white" }}>
          <a class="" href="#home">
            <h2 style={{ color: "white" }}>Welcome To Hitman Network</h2>
          </a>
        </div>
        <br></br>
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
