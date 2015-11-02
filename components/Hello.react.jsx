/** @jsx React.DOM */
React = require('react');
ReactDOM = require('react-dom');

module.exports = Hello = React.createClass({

    getInitialState: function() {
        return {
            users: []
        };
    },

    componentDidMount: function() {
        console.log('component mounted');
        $.get('/api/users', function(result) {
            console.log(result);
            if (this.isMounted()) {
                this.setState({users: result});
            }
        }.bind(this));
    },

    // Render the component
    render: function(){
        console.log('rendering');

        var rows = [];
        for (var i=0; i < this.state.users.length; i++) {
            rows.push(<li key={this.state.users[i].email}>{this.state.users[i].email}</li>);
        }
        return (<ul>{rows}</ul>);
    }
});