import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <>
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              counter={counter}
            >
              {/* <h4>Counter #{counter.id}</h4> */}
            </Counter>
            <br />
          </>
        ))}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
