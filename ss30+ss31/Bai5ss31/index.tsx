import React, { ChangeEvent, Component } from "react";
type StateType = {
  id: string;
  name: string;
  price: number;
  quantaty: number;
  formData: { id: string; name: string; price: number; quantaty: number }[];
};
export default class Bai5ss31 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: 0,
      quantaty: 0,
      formData: [],
    };
  }
  changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  out = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, name, price, quantaty, formData } = this.state;
    const newData = [...formData, { id, name, price, quantaty }];
    this.setState({
      formData: newData,
      id: "",
      name: "",
      price: 0,
      quantaty: 0,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.out}>
          <h3>Add sản phẩm mới</h3>
          <label>Mã sản phẩm</label>
          <br />
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.changeInput}
          />
          <br />
          <label>Tên sản phẩm</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changeInput}
          />
          <br />
          <label>Giá</label>
          <br />
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.changeInput}
          />
          <br />
          <label>Số lượng</label>
          <br />
          <input
            type="number"
            name="quantaty"
            value={this.state.quantaty}
            onChange={this.changeInput}
          />
          <br />
          <button type="submit">Add</button>
          {this.state.formData && (
            <>
              {this.state.formData.map((item) => (
                <div>
                  <p>Id: {item.id}</p>
                  <p>Name: {item.name}</p>
                  <p>Gia: {item.price}</p>
                  <p>So luong: {item.quantaty}</p>
                </div>
              ))}
            </>
          )}
        </form>
      </div>
    );
  }
}
