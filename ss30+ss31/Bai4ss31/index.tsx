import React, { ChangeEvent, Component } from "react";
type StateType = {
  data: string;
  submitData: string;
};
export default class Bai4ss31 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: "",
      submitData: "",
    };
  }
  changeData = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      data: value,
    });
  };

  outData = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      submitData: this.state.data,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.outData}>
          {this.state.submitData && (
            <>
              <p>tiến độ hoàn thành {this.state.submitData}%</p>
            </>
          )}
          <input
            type="range"
            name="data"
            value={this.state.data}
            onChange={this.changeData}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
