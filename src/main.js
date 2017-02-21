$ = jQuery = require('jquery');
var React = require('react');
//var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var routes = require('./routes');

ReactRouter.run(routes, function(Handler){
     React.render(<Handler />,document.getElementById("app"));
});

