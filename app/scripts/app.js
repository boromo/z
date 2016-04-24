var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    mountNode = document.getElementById("app"),
    Zoo = require('./components/Zoo');

ReactDOM.render(<Zoo />, mountNode);

