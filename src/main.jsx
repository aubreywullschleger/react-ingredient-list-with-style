var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="things 'n stuff" headingColor="orange" />, document.getElementById('thingsnstuff'));
ReactDOM.render(<ListManager title="todo" headingColor="teal"/>, document.getElementById('todo'));
