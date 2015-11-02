var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/Hello.react.jsx');

// Render the components, picking up where react left off on the server
ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('gripan')
);