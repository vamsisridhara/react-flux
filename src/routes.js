"use strict";
var React = require('react');
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
    </Route>
);
module.exports = routes;