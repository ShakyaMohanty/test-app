import React from 'react';
import ReactDom from 'react-dom';
// import HeaderTabs from './components/HeaderComponent';
import HeaderComponent from './components/HeaderComponent';

// const element = <h1>Hello Application</h1>
ReactDom.render(<HeaderComponent />, document.querySelector('#root'));