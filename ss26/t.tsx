import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

const root = document.querySelector('#root');
const element = <MyComponent message="Xin chào!" />;

ReactDOM.render(element, root);
