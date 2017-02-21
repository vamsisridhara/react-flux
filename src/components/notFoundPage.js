"use strict";
var React = require('react');
var Router = require('react-router');
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>
                   No page found with request
                </p>
                <Link to="app" className="btn btn-sm btn-primary">Home</Link>
            </div>
        );
    }
});
module.exports = NotFoundPage;