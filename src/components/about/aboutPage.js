"use strict";
var React = require("react");
var About = React.createClass({
    statics: {
        willTransitionFrom: function (transition, component) {
            if (!confirm("are you sure you want to leave a page thats this boring?")) {
                transition.about();
            }
        },
        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm("are you sure you read a page thats this boring?")) {
                transition.about();
            }
            else {
                callback();
            }
        }
    },
    render: function () {
        return (
            <div className="jumbotron">
                welcome to About Page.
                    This application uses the following
                    <ul>
                    <li>
                        React, React Router, Flux , Gulp, Bootstrap
                    </li>
                </ul>
            </div>
        );
    }
});
module.exports = About;