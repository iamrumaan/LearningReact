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
      return (
        <span class="bg-danger" style={{ color: "white" }}>
          00 Hours : 00 Minutes : 00 Seconds
        </span>
      );
    } else if (completed) {
      return (
        <h1 class="bg-danger" style={{ color: "white" }}>
          Target Eliminated! HEADSHOTT!!
        </h1>
      );
    } else {
      return (
        <div>
          <span class="bg-danger" style={{ color: "white" }}>
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
        <table
          style={{ color: "white" }}
          class="table table-sm table-borderless"
        >
          <tr style={{ textAlign: "right" }}>
            <td>
              <label>Target Name</label>
            </td>
            <td style={{ color: "red", textAlign: "left" }}>
              <bold>John Abbot</bold>
            </td>
          </tr>
          <tr style={{ textAlign: "right" }}>
            <td>
              <label>Location</label>
            </td>
            <td style={{ color: "red", textAlign: "left" }}>
              <bold>Copenhagen</bold>
            </td>
          </tr>
          <tr style={{ textAlign: "right" }}>
            <td>
              <label>Status</label>
            </td>
            <td style={{ textAlign: "left" }}>
              <div id="divStatus">
                <bold id="lblStatus" style={{ color: "red" }}>
                  {this.state.action}
                </bold>
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
              class="form-control col-sm-2"
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
