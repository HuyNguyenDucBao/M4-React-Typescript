import React, { ChangeEvent, Component } from "react";
type StateType = {
  color: string;
  submitColor: string;
};
export default class Bai2ss31 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "",
      submitColor: "",
    };
  }
  in = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      color: value,
    });
  };
  out = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      submitColor: this.state.color,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.out}>
          <h3>{this.state.submitColor}</h3>
          <input
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.in}
          />
          <div style={{ backgroundColor: this.state.submitColor }}>he</div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
