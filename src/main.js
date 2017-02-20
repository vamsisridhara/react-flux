$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var routes = require('./routes');

ReactRouter.run(routes, function(Handler){
     ReactDOM.render(<Handler />,document.getElementById("app"));
});

// (function (win) {
//     "use strict";
    
//     function render(){
//         var route = win.location.hash.substr(1);
//         ReactDOM.render(<App route={route} />, document.getElementById("app"));
//     }
//     win.addEventListener('hashChange', render);
//     render();
// }(window));
