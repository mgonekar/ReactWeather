var React = require('react');
var {Link} = require('react-router');

// var Nav = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h2>Nav Components</h2>
//                 <Link to="/">Get Weather</Link>
//                 <Link to="about">About</Link>
//                 <Link to="examples">Examples</Link>
//             </div>
//         );
//     }
// });

var Nav = () => {
    return (
        <div>
            <h2>Nav Components</h2>
            <Link to="/">Get Weather</Link>
            <Link to="about">About</Link>
            <Link to="examples">Examples</Link>
        </div>
    );
};

module.exports = Nav;
