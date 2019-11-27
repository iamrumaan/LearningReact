import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown-now";

//Class Component
class Table extends React.Component {
  myelement;
  huntTimeReq;
  val = 0;

  //Component Constructor
  constructor(props) {
    super(props);
    this.state = {
      action: "Pending"
    };
  }

  //Arrow Functions
  changeStatus = () => {
    var oldParent = document.getElementById("divStatus");
    var oldChild = document.getElementById("lblStatus");
    var wrapper = document.createElement("strong");
    oldParent.appendChild(wrapper);
    wrapper.appendChild(oldChild);
    this.huntTimeReq = document.getElementById("huntTime").value;
    this.val = this.huntTimeReq * 3600000;
    this.setState({ action: "Hunting" });
  };

  renderer = ({ hours, minutes, seconds, completed }) => {
    // Render a countdown

    if (this.val == 0) {
      return <span>00 Hours : 00 Minutes : 00 Seconds</span>;
    } else if (completed) {
      return <h1>Target Eliminated! HEADSHOT!!</h1>;
    } else {
      return (
        <div>
          <span>
            {hours} Hours : {minutes} Minutes : {seconds} Seconds
          </span>
          <br></br>
          <h3>Till Target Elimination</h3>
        </div>
      );
    }
  };

  render() {
    this.myelement = (
      <div>
        <h2 style={{ color: "red" }}>Hello Agent {this.props.id}</h2>
        <table>
          <tr>
            <td>
              <strong>Target Name</strong>
            </td>
            <td style={{ color: "red" }}>John Abbot</td>
          </tr>
          <tr>
            <td>
              <strong>Location</strong>
            </td>
            <td style={{ color: "red" }}>Copenhagen</td>
          </tr>
          <tr>
            <td>
              <strong>Status</strong>
            </td>
            <td>
              <div id="divStatus">
                <label id="lblStatus" style={{ color: "red" }}>
                  {this.state.action}
                </label>
              </div>
            </td>
          </tr>
        </table>
        <div>
          <form>
            <h3>Time required to hunt in hours:</h3>
            <input id="huntTime" type="number"></input>
            &nbsp;
            <button id="btnChange" type="button" onClick={this.changeStatus}>
              <strong>Start The Hunt</strong>
            </button>
          </form>
        </div>
        &nbsp; &nbsp;
        <div id="huntTimer" style={{ color: "red" }}>
          <Countdown date={Date.now() + this.val} renderer={this.renderer} />
        </div>
      </div>
    );
    return this.myelement;
  }
}

export default Table;
