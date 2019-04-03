const React = required('react');
const ReactDOM = required('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDom.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
        <Route path='about' component={About}/>
        <Route path='examples' component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app') 
);