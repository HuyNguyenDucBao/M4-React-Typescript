import React, { ChangeEvent, Component } from "react";
let interval: number = -1;
export default class Bai9 extends Component<{}, { date: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: 0,
    };
  }
  changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      date: +value,
    });
  };
  out = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearInterval(interval);
    if (this.state.date > 0) {
      interval = setInterval(() => {
        clearInterval(interval);
        this.setState({
          ...this.state,
          date: this.state.date - 1,
        });
      }, 1000);
    }
  };
  pause = () => {
    clearInterval(interval);
  };
  restart = () => {
    clearInterval(interval);
    this.setState({
      ...this.state,
      date: 0,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.out}>
          <p>time:{this.state.date}</p>
          <input type="number" name="date" onChange={this.changeInput} />
          <button type="submit">Starst</button>
        </form>
        <button onClick={this.pause}> Pause</button>
        <button onClick={this.restart}>Restart</button>
      </div>
    );
  }
}
