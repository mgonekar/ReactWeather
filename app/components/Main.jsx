var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Nav/>
//                 <h2>Main Components</h2>
//                 {this.props.childern}
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h2>Main Components</h2>
            {props.childern}
        </div>
    );
};
 
module.exports = Main;