console.log(React);
const domContainer = document.querySelector("#root");
// tạo node gốc của dom
const root = ReactDOM.createRoot(domContainer);
// đẻ con và hiển thị con

// basic
// let P = React.createElement(
//   "p",
//   {
//     id: 1,
//     class: "Thành công",
//     name: "Kha",
//   },
//   "Đình Kha"
// );
let P = <p id="hi">Hi hi</p>;

root.render(P);
