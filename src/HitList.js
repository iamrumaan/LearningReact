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
      return <span class="bg-active">00 Hours : 00 Minutes : 00 Seconds</span>;
    } else if (completed) {
      return <h1 class="bg-danger">Target Eliminated! HEADSHOTT!!</h1>;
    } else {
      return (
        <div>
          <span class="bg-active">
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
        <h2>
          Hello <label style={{ color: "red" }}>Agent {this.props.id}</label>
        </h2>
        <br></br>
        <h4>Target Details</h4>
        <table style={{ color: "white" }} class="table table-borderless">
          <tr style={{ textAlign: "right" }}>
            <td>
              <bold>Target Name</bold>
            </td>
            <td style={{ color: "red", textAlign: "left" }}>John Abbot</td>
          </tr>
          <tr style={{ textAlign: "right" }}>
            <td>
              <strong>Location</strong>
            </td>
            <td style={{ color: "red", textAlign: "left" }}>Copenhagen</td>
          </tr>
          <tr style={{ textAlign: "right" }}>
            <td>
              <strong>Status</strong>
            </td>
            <td style={{ textAlign: "left" }}>
              <div id="divStatus">
                <label id="lblStatus" style={{ color: "red" }}>
                  {this.state.action}
                </label>
              </div>
            </td>
          </tr>
        </table>
        <div>
          <form class="form">
            <label>Time required to hunt in hours:</label>
            <input
              id="huntTime"
              type="text"
              class="form-control col-sm-1"
            ></input>
            <br></br>
            <button
              id="btnChange"
              type="button"
              class="btn btn-danger sm-1"
              onClick={this.changeStatus}
            >
              <strong>Start The Hunt</strong>
            </button>
          </form>
        </div>
        &nbsp; &nbsp;
        <div id="huntTimer" style={{ color: "white" }}>
          <Countdown date={Date.now() + this.val} renderer={this.renderer} />
        </div>
      </div>
    );
    return this.myelement;
  }
}

export default Table;
