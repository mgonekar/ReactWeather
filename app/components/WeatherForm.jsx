var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.ref.location.value;

        if(location.length > 0) {
            this.ref.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSublit}>
                <input type = "text" ref="location"/>
                <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;