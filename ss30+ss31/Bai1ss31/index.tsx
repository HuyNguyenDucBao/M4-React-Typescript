import React, { ChangeEvent, Component } from "react";
type StateType = {
  email: string;
  submitEmail: string;
};
export default class Bai1ss31 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      submitEmail: "",
    };
  }
  in = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      email: value,
    });
  };
  out = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      submitEmail: this.state.email,
      email: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.out}>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.in}
          />
          <button type="submit">Submit</button>
          <p>{this.state.submitEmail}</p>
          {/* {this.state.submitEmail && (
            <>
              <p>gmail: {this.state.submitEmail}</p>
            </>
          )} */}
        </form>
      </div>
    );
  }
}
