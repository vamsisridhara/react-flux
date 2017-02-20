"use strict";
var React = require('react');
var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    this application uses the following tech;s
                    React, React Router, Flux, Node, Gulp, Bootstrap , Browserify for responsive web apps
                </p>
            </div>
        );
    }
});
module.exports = About;