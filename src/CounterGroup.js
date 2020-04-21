import React, { Component } from "react";
import Counter from "./Counter";
import {INIT_NUMBER_OF_COUNTER} from "./constants/constants"

class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      size: INIT_NUMBER_OF_COUNTER,
    };
  }

  initArray(size) {
    return Array.from(Array(size).keys());
  }

  onChange(event) {
    const value = event.target.value;
    this.setState({
      size: value.length > 0 ? parseInt(value) : 0,
    });
  }

  render() {
    let counters = this.initArray(this.state.size);
    return (
      <div>
        <form>
          <input onChange={this.onChange} type="text" value={this.state.size} />
        </form>
        {counters.map((value) => (
          <Counter key={value} />
        ))}
      </div>
    );
  }
}
export default CounterGroup;
