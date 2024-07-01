import React, { ChangeEvent, Component } from "react";
type StateType = {
  date: string;
  submitDate: string;
};
export default class Bai3ss31 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
      submitDate: "",
    };
  }
  changeDate = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      date: value,
    });
  };
  outDate = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      submitDate: this.state.date,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.outDate}>
          {this.state.submitDate && (
            <>
              <h3>Ngày sinh {this.state.submitDate}</h3>
            </>
          )}
          <input
            type="date"
            value={this.state.date}
            name="date"
            onChange={this.changeDate}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
